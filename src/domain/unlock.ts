import type { SubjectState, RequiredState, SubjectNode, CareerMap } from "./types";

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
export function isUnlockedByPrereqs(node: SubjectNode, states: Record<string, SubjectState>): boolean {
  return (node.correlativas ?? []).every(prereq =>
    satisfies(prereq.requiredState, getState(states, prereq.subjectId))
  );
}


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
export function canInteract(
  node: SubjectNode,
  map: CareerMap,
  states: Record<string, SubjectState>
): boolean {
  return isUnlockedByPrereqs(node, states) && isUnlockedByPriorYears(node, map, states);
}

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
export function getMissingReasons(
  node: SubjectNode,
  map: CareerMap,
  states: Record<string, SubjectState>
): string[] {
  const reasons: string[] = [];
  if (!isUnlockedByPriorYears(node, map, states)) {
    reasons.push("Falta aprobar todas las materias de años anteriores");
  }
  if (!isUnlockedByPrereqs(node, states)) {
    for (const prereq of node.correlativas ?? []) {
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
