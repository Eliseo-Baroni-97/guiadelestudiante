import type { CareerMap } from "../../domain/types";

export const mockCareer: CareerMap = {
  id: "tec-programacion-mock",
  name: "Tecnicatura en Programacion (Mock)",
  version: 1,
  policy: {
    priorYearsApproved: false,
  },
  nodes: [
    {
      id: "mock_1",
      name: "Introduccion a la Programacion",
      year: 1,
      duration: "PRIMER_SEMESTRE",
      correlativas: [],
      cuatrimestre: 1,
    },
    {
      id: "mock_2",
      name: "Matematica Discreta",
      year: 1,
      duration: "PRIMER_SEMESTRE",
      correlativas: [],
      cuatrimestre: 1,
    },
    {
      id: "mock_3",
      name: "Programacion Orientada a Objetos",
      year: 1,
      duration: "SEGUNDO_SEMESTRE",
      correlativas: [{ subjectId: "mock_1", requiredState: "APROBADA" }],
      cuatrimestre: 2,
    },
    {
      id: "mock_4",
      name: "Base de Datos",
      year: 1,
      duration: "SEGUNDO_SEMESTRE",
      correlativas: [{ subjectId: "mock_1", requiredState: "REGULAR" }],
      cuatrimestre: 2,
    },
    {
      id: "mock_5",
      name: "Proyecto Integrador",
      year: 2,
      duration: "ANUAL",
      correlativas: [
        { subjectId: "mock_3", requiredState: "APROBADA" },
        { subjectId: "mock_4", requiredState: "APROBADA" }
      ],
      cuatrimestre: 3,
    },
  ],
};
