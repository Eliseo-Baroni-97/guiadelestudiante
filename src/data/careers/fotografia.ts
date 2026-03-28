import type { CareerMap } from "../../domain/types";

export const fotografia: CareerMap = {
  id: "fotografia",
  name: "Tecnicatura en Fotografía",
  version: 1,
  policy: {
    priorYearsApproved: false,
  },
  nodes: [
    // 1° AÑO
    {
      id: "fotografia1",
      name: "Fotografía I",
      year: 1,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 1,
      duration: "ANUAL",
    },
    {
      id: "laboratorio1",
      name: "Laboratorio I",
      year: 1,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 1,
      duration: "ANUAL",
    },
    {
      id: "historia_fotografia",
      name: "Historia de la Fotografía",
      year: 1,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 1,
      duration: "ANUAL",
    },
    {
      id: "ingles",
      name: "Inglés",
      year: 1,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 1,
      duration: "ANUAL",
    },

    // 2° AÑO
    {
      id: "fotografia2",
      name: "Fotografía II",
      year: 2,
      correlativasCursar: [
        { subjectId: "fotografia1", requiredState: "REGULAR" },
        { subjectId: "laboratorio1", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "fotografia1", requiredState: "APROBADA" },
        { subjectId: "laboratorio1", requiredState: "APROBADA" },
      ],
      cuatrimestre: 2,
      duration: "ANUAL",
    },
    {
      id: "laboratorio2",
      name: "Laboratorio II",
      year: 2,
      correlativasCursar: [
        { subjectId: "fotografia1", requiredState: "REGULAR" },
        { subjectId: "laboratorio1", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "fotografia1", requiredState: "APROBADA" },
        { subjectId: "laboratorio1", requiredState: "APROBADA" },
      ],
      cuatrimestre: 2,
      duration: "ANUAL",
    },
    {
      id: "quimica",
      name: "Química",
      year: 2,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 2,
      duration: "ANUAL",
    },

    // 3° AÑO
    {
      id: "fotografia_color",
      name: "Fotografía Color",
      year: 3,
      correlativasCursar: [
        { subjectId: "laboratorio1", requiredState: "APROBADA" },
        { subjectId: "laboratorio2", requiredState: "REGULAR" },
        { subjectId: "fotografia1", requiredState: "APROBADA" },
        { subjectId: "fotografia2", requiredState: "REGULAR" },
        { subjectId: "quimica", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "laboratorio2", requiredState: "APROBADA" },
        { subjectId: "fotografia2", requiredState: "APROBADA" },
      ],
      cuatrimestre: 3,
      duration: "ANUAL",
    },
    {
      id: "practica_fotografica",
      name: "Práctica Fotográfica",
      year: 3,
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
      duration: "ANUAL",
    },
    {
      id: "fotografia_artistica",
      name: "Fotografía Artística",
      year: 3,
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
      duration: "ANUAL",
    },
    {
      id: "fotografia_publicitaria",
      name: "Fotografía Publicitaria",
      year: 3,
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
      duration: "ANUAL",
    },
    {
      id: "medios_audiovisuales",
      name: "Medios Audiovisuales",
      year: 3,
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
      duration: "ANUAL",
    },
  ],
};