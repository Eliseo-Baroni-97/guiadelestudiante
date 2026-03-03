// Tipos base para el dominio de la carrera

export type SubjectState = "NO_APROBADA" | "CURSANDO" | "REGULAR" | "APROBADA";

export type RequiredState = "REGULAR" | "APROBADA";

export type SubjectDuration = 'PRIMER_SEMESTRE' | 'SEGUNDO_SEMESTRE' | 'ANUAL';

export interface Prereq {
  subjectId: string;
  requiredState: RequiredState;
}

export interface SubjectNode {
  id: string;
  name: string;
  year: number;
  correlativas: Prereq[];
  duration?: SubjectDuration;
  cuatrimestre?: number;
}

export interface CareerMap {
  id: string;
  name: string;
  version: number;
  policy: {
    priorYearsApproved: boolean;
  };
  nodes: SubjectNode[];
}
