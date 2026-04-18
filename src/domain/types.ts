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
  correlativas?: Prereq[]; // legacy temporal, puede estar ausente
  /**
   * Correlativas requeridas para poder cursar y para poder quedar regular en la materia.
   * Según la normativa, si cumplís estas correlativas podés cursar y también quedar regular,
   * pero no necesariamente aprobar (para eso existen correlativasAprobar).
   */
  correlativasCursar?: Prereq[];
  correlativasAprobar?: Prereq[];
  duration?: SubjectDuration;
  cuatrimestre?: number;
  /**
   * Años completos requeridos para cursar (por ejemplo, [1] para requerir 1° año completo para cursar)
   */
  requiresYearsApprovedCursar?: number[];
  /**
   * Años completos requeridos para aprobar (por ejemplo, [1,2] para requerir 1° y 2° año completos para aprobar)
   */
  requiresYearsApprovedAprobar?: number[];
  /**
   * (Compatibilidad) Si se define, se usa para ambos casos (cursar y aprobar)
   */
  requiresYearsApproved?: number[];
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
