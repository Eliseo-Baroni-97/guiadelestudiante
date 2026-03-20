import type { SubjectState, RequiredState, SubjectNode, CareerMap } from "./types";
import type { Prereq } from "./types";

// Devuelve el estado de una materia por su id, o "NO_APROBADA" si no existe
export function getState(states: Record<string, SubjectState>, subjectId: string): SubjectState {
  return states[subjectId] ?? "NO_APROBADA";
}

// Verifica si el estado actual cumple con el requerido
export function satisfies(required: RequiredState, actual: SubjectState): boolean {
  if (required === "REGULAR") {
    return actual === "REGULAR" || actual === "APROBADA";
  }
  // required === "APROBADA"
  return actual === "APROBADA";
}

// Devuelve true si todas las correlativas están cumplidas
export function isUnlockedByPrereqsList(prereqs: Prereq[] | undefined, states: Record<string, SubjectState>): boolean {
  return (prereqs ?? []).every(prereq =>
    satisfies(prereq.requiredState, getState(states, prereq.subjectId))
  );
}

// Compatibilidad: correlativasCursar ausente => []
export function canEnroll(node: SubjectNode, map: CareerMap, states: Record<string, SubjectState>): boolean {
  const prereqs = node.correlativasCursar ?? [];
  return isUnlockedByPrereqsList(prereqs, states) && isUnlockedByPriorYears(node, map, states);
}

// Compatibilidad: correlativasAprobar ausente => correlativas legacy o []
export function canApprove(node: SubjectNode, map: CareerMap, states: Record<string, SubjectState>): boolean {
  const prereqs = node.correlativasAprobar ?? node.correlativas ?? [];
  return isUnlockedByPrereqsList(prereqs, states) && isUnlockedByPriorYears(node, map, states);
}

// Alias temporal para compatibilidad
export const canInteract = canApprove;


// Devuelve true si se cumple la policy de años previos aprobados
export function isUnlockedByPriorYears(
  node: SubjectNode,
  map: CareerMap,
  states: Record<string, SubjectState>
): boolean {
  if (!map.policy.priorYearsApproved) return true;
  const prevYearNodes = map.nodes.filter(n => n.year < node.year);
  return prevYearNodes.every(n => getState(states, n.id) === "APROBADA");
}

// Devuelve true si la materia está habilitada para interactuar (correlativas y policy)
// (Función eliminada, usar alias canInteract = canApprove)

// Agrupa materias por año, ordenando los años ascendentemente
export function groupByYear(nodes: SubjectNode[]): Record<number, SubjectNode[]> {
  const grouped: Record<number, SubjectNode[]> = {};
  for (const node of nodes) {
    if (!grouped[node.year]) grouped[node.year] = [];
    grouped[node.year].push(node);
  }
  return Object.fromEntries(
    Object.entries(grouped).sort((a, b) => Number(a[0]) - Number(b[0]))
  );
}

// Devuelve razones por las que no se puede cursar/interactuar
// Razones faltantes para cursar
export function getMissingReasonsEnroll(
  node: SubjectNode,
  map: CareerMap,
  states: Record<string, SubjectState>
): string[] {
  const reasons: string[] = [];
  if (!isUnlockedByPriorYears(node, map, states)) {
    reasons.push("Falta aprobar todas las materias de años anteriores");
  }
  if (!isUnlockedByPrereqsList(node.correlativasCursar ?? [], states)) {
    for (const prereq of node.correlativasCursar ?? []) {
      const actual = getState(states, prereq.subjectId);
      if (!satisfies(prereq.requiredState, actual)) {
        const subject = map.nodes.find(n => n.id === prereq.subjectId);
        const name = subject ? subject.name : prereq.subjectId;
        reasons.push(`Falta ${prereq.requiredState} en: ${name}`);
      }
    }
  }
  return reasons;
}

// Razones faltantes para aprobar
export function getMissingReasonsApprove(
  node: SubjectNode,
  map: CareerMap,
  states: Record<string, SubjectState>
): string[] {
  const reasons: string[] = [];
  if (!isUnlockedByPriorYears(node, map, states)) {
    reasons.push("Falta aprobar todas las materias de años anteriores");
  }
  const prereqs = node.correlativasAprobar ?? node.correlativas ?? [];
  if (!isUnlockedByPrereqsList(prereqs, states)) {
    for (const prereq of prereqs) {
      const actual = getState(states, prereq.subjectId);
      if (!satisfies(prereq.requiredState, actual)) {
        const subject = map.nodes.find(n => n.id === prereq.subjectId);
        const name = subject ? subject.name : prereq.subjectId;
        reasons.push(`Falta ${prereq.requiredState} en: ${name}`);
      }
    }
  }
  return reasons;
}

// Compatibilidad: legacy
export function getMissingReasons(
  node: SubjectNode,
  map: CareerMap,
  states: Record<string, SubjectState>
): string[] {
  // Por defecto, razones para aprobar
  return getMissingReasonsApprove(node, map, states);
}
