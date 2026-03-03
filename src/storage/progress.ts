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

export function nextState(current: SubjectState): SubjectState {
  switch (current) {
    case "NO_APROBADA":
      return "REGULAR";
    case "REGULAR":
      return "APROBADA";
    case "APROBADA":
    default:
      return "NO_APROBADA";
  }
}

export function updateSubjectState(
  map: CareerMap,
  progress: Progress,
  subjectId: string
): Progress {
  const current = progress.states[subjectId] ?? "NO_APROBADA";
  const next = nextState(current);
  return {
    ...progress,
    mapVersion: map.version,
    updatedAt: new Date().toISOString(),
    states: {
      ...progress.states,
      [subjectId]: next,
    },
  };
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
  let parsed: any;
  try {
    parsed = JSON.parse(item);
  } catch {
    return createInitialProgress(map);
  }
  if (!parsed || parsed.mapId !== map.id) {
    return createInitialProgress(map);
  }
  // Si la versión no coincide, migrar best-effort
  if (parsed.mapVersion !== map.version) {
    const newStates: Record<string, SubjectState> = {};
    for (const node of map.nodes) {
      if (parsed.states && typeof parsed.states[node.id] === "string") {
        newStates[node.id] = parsed.states[node.id];
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
    if (parsed.states && typeof parsed.states[node.id] === "string") {
      normStates[node.id] = parsed.states[node.id];
    } else {
      normStates[node.id] = "NO_APROBADA";
    }
  }
  return {
    mapId: map.id,
    mapVersion: map.version,
    updatedAt: parsed.updatedAt || new Date().toISOString(),
    states: normStates,
  };
}
