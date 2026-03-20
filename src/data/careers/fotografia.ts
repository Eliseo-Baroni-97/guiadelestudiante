import type { CareerMap } from "../../domain/types";

export const fotografia: CareerMap = {
  id: "fotografia",
  name: "Tecnicatura en Fotografía",
  version: 1,
  policy: {
    priorYearsApproved: false,
  },
  nodes: [
    {
      id: "laboratorio1",
      name: "Laboratorio I",
      year: 1,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 1,
      duration: "PRIMER_SEMESTRE",
    },
    {
      id: "laboratorio2",
      name: "Laboratorio II",
      year: 1,
      correlativasCursar: [
        { subjectId: "laboratorio1", requiredState: "APROBADA" },
      ],
      correlativasAprobar: [
        { subjectId: "laboratorio1", requiredState: "APROBADA" },
      ],
      cuatrimestre: 2,
      duration: "SEGUNDO_SEMESTRE",
    },
    {
      id: "fotografia1",
      name: "Fotografía I",
      year: 1,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 1,
      duration: "PRIMER_SEMESTRE",
    },
    {
      id: "fotografia2",
      name: "Fotografía II",
      year: 1,
      correlativasCursar: [
        { subjectId: "fotografia1", requiredState: "APROBADA" },
      ],
      correlativasAprobar: [
        { subjectId: "fotografia1", requiredState: "APROBADA" },
      ],
      cuatrimestre: 2,
      duration: "SEGUNDO_SEMESTRE",
    },
    {
      id: "practica",
      name: "Práctica Fotográfica",
      year: 1,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 1,
      duration: "PRIMER_SEMESTRE",
    },
    {
      id: "fotografia_artistica",
      name: "Fotografía Artística",
      year: 2,
      correlativasCursar: [
        { subjectId: "laboratorio1", requiredState: "APROBADA" },
        { subjectId: "laboratorio2", requiredState: "REGULAR" },
        { subjectId: "fotografia1", requiredState: "APROBADA" },
        { subjectId: "fotografia2", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "laboratorio2", requiredState: "APROBADA" },
        { subjectId: "fotografia2", requiredState: "APROBADA" },
      ],
      cuatrimestre: 3,
      duration: "PRIMER_SEMESTRE",
    },
    {
      id: "fotografia_publicitaria",
      name: "Fotografía Publicitaria",
      year: 2,
      correlativasCursar: [
        { subjectId: "laboratorio1", requiredState: "APROBADA" },
        { subjectId: "laboratorio2", requiredState: "REGULAR" },
        { subjectId: "fotografia1", requiredState: "APROBADA" },
        { subjectId: "fotografia2", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "laboratorio2", requiredState: "APROBADA" },
        { subjectId: "fotografia2", requiredState: "APROBADA" },
      ],
      cuatrimestre: 4,
      duration: "SEGUNDO_SEMESTRE",
    },
    {
      id: "medios_audiovisuales",
      name: "Medios Audiovisuales",
      year: 2,
      correlativasCursar: [
        { subjectId: "laboratorio1", requiredState: "APROBADA" },
        { subjectId: "laboratorio2", requiredState: "REGULAR" },
        { subjectId: "fotografia1", requiredState: "APROBADA" },
        { subjectId: "fotografia2", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "laboratorio2", requiredState: "APROBADA" },
        { subjectId: "fotografia2", requiredState: "APROBADA" },
      ],
      cuatrimestre: 5,
      duration: "PRIMER_SEMESTRE",
    },
  ],
};
