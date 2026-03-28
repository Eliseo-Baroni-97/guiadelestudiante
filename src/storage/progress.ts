import { canEnroll, canApprove } from "../domain/unlock";
// Normaliza los estados de todas las materias según correlativas y reglas globales
export function normalizeProgressStates(map: CareerMap, progress: Progress): Progress {
  const newStates: Record<string, SubjectState> = { ...progress.states };
  for (const node of map.nodes) {
    const current = newStates[node.id] ?? "NO_APROBADA";
    // Si está en APROBADA pero ya no puede aprobar, vuelve a NO_APROBADA
    if (current === "APROBADA" && !canApprove(node, map, newStates)) {
      newStates[node.id] = "NO_APROBADA";
    }
    // Si está en REGULAR pero ya no puede aprobar, vuelve a NO_APROBADA
    else if (current === "REGULAR" && !canApprove(node, map, newStates)) {
      newStates[node.id] = "NO_APROBADA";
    }
    // Si está en CURSANDO pero ya no puede cursar, vuelve a NO_APROBADA
    else if (current === "CURSANDO" && !canEnroll(node, map, newStates)) {
      newStates[node.id] = "NO_APROBADA";
    }
    // NO_APROBADA siempre es válido
  }
  return {
    ...progress,
    states: newStates,
  };
}
import type { SubjectState, CareerMap } from "../domain/types";
export type Progress = {
  mapId: string;
  mapVersion: number;
  updatedAt: string; // ISO string
  states: Record<string, SubjectState>;
};

export function storageKey(mapId: string): string {
  return `brujulau:progress:${mapId}`;
}

export function advanceSubjectState(
  map: CareerMap,
  progress: Progress,
  subjectId: string
): Progress {
  const node = map.nodes.find((n) => n.id === subjectId);
  if (!node) {
    return progress;
  }

  const current = progress.states[subjectId] ?? "NO_APROBADA";
  // Secuencia circular: NO_APROBADA -> CURSANDO -> REGULAR -> APROBADA -> NO_APROBADA
  let next: SubjectState;
  if (current === "NO_APROBADA") {
    next = "CURSANDO";
  } else if (current === "CURSANDO") {
    next = "REGULAR";
  } else if (current === "REGULAR") {
    next = "APROBADA";
  } else {
    // Cualquier otro valor, incluyendo "APROBADA", vuelve a NO_APROBADA
    next = "NO_APROBADA";
  }

  const updated = {
    ...progress,
    mapVersion: map.version,
    updatedAt: new Date().toISOString(),
    states: {
      ...progress.states,
      [subjectId]: next,
    },
  };
  // Normalizar todos los estados después de cada cambio
  return normalizeProgressStates(map, updated);
}

export function resetProgress(map: CareerMap): Progress {
  localStorage.removeItem(storageKey(map.id));
  return createInitialProgress(map);
}

export function createInitialProgress(map: CareerMap): Progress {
  const states: Record<string, SubjectState> = {};
  for (const node of map.nodes) {
    states[node.id] = "NO_APROBADA";
  }
  return {
    mapId: map.id,
    mapVersion: map.version,
    updatedAt: new Date().toISOString(),
    states,
  };
}


export function saveProgress(progress: Progress): void {
  localStorage.setItem(storageKey(progress.mapId), JSON.stringify(progress));
}

export function loadProgress(map: CareerMap): Progress {
  const key = storageKey(map.id);
  const item = localStorage.getItem(key);
  if (!item) {
    return createInitialProgress(map);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(item);
  } catch {
    return createInitialProgress(map);
  }
  if (!parsed || typeof parsed !== "object" || parsed === null || !("mapId" in parsed) || (parsed as Progress).mapId !== map.id) {
    return createInitialProgress(map);
  }
  const progress = parsed as Progress;
  // Si la versión no coincide, migrar best-effort
  if (progress.mapVersion !== map.version) {
    const newStates: Record<string, SubjectState> = {};
    for (const node of map.nodes) {
      if (progress.states && typeof progress.states[node.id] === "string") {
        newStates[node.id] = progress.states[node.id];
      } else {
        newStates[node.id] = "NO_APROBADA";
      }
    }
    const migrated: Progress = {
      mapId: map.id,
      mapVersion: map.version,
      updatedAt: new Date().toISOString(),
      states: newStates,
    };
    saveProgress(migrated);
    return migrated;
  }
  // Si la versión coincide, normalizar estados
  const normStates: Record<string, SubjectState> = {};
  for (const node of map.nodes) {
    if (progress.states && typeof progress.states[node.id] === "string") {
      normStates[node.id] = progress.states[node.id];
    } else {
      normStates[node.id] = "NO_APROBADA";
    }
  }
  return {
    mapId: map.id,
    mapVersion: map.version,
    updatedAt: progress.updatedAt || new Date().toISOString(),
    states: normStates,
  };
}
