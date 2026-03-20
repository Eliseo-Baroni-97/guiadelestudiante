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
    // Agrega nodos laboratorio1, laboratorio2, fotografia1, fotografia2 según tu estructura
  ],
};
