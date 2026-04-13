import type { CareerMap } from "../../domain/types";

export const disenoInteriores: CareerMap = {
  id: "diseno-interiores",
  name: "Diseño de Interiores",
  version: 1,
  policy: {
    priorYearsApproved: false,
  },
  nodes: [
    // NODOS AUXILIARES PARA AÑOS COMPLETOS
    // Estos sirven para representar reglas como:
    // "para cursar 3° año tener aprobado 1° año"
    // "para cursar 4° año tener aprobados 1° y 2° años completos"
    {
      id: "anio1_completo",
      name: "1° Año Completo",
      year: 1,
      correlativasCursar: [
        { subjectId: "intro_diseno_proyectual", requiredState: "APROBADA" },
        { subjectId: "lenguaje_visual_1", requiredState: "APROBADA" },
        { subjectId: "sistemas_representacion", requiredState: "APROBADA" },
        { subjectId: "cultura_diseno", requiredState: "APROBADA" },
      ],
      correlativasAprobar: [
        { subjectId: "intro_diseno_proyectual", requiredState: "APROBADA" },
        { subjectId: "lenguaje_visual_1", requiredState: "APROBADA" },
        { subjectId: "sistemas_representacion", requiredState: "APROBADA" },
        { subjectId: "cultura_diseno", requiredState: "APROBADA" },
      ],
      cuatrimestre: 0,
      duration: "ANUAL",
    },
    {
      id: "anio2_completo",
      name: "2° Año Completo",
      year: 2,
      correlativasCursar: [
        { subjectId: "diseno_interiores_1", requiredState: "APROBADA" },
        { subjectId: "lenguaje_visual_2", requiredState: "APROBADA" },
        { subjectId: "historia_diseno_interiores_equipamiento_1", requiredState: "APROBADA" },
        { subjectId: "tecnologia_materiales_1", requiredState: "APROBADA" },
        { subjectId: "confort_ambiental", requiredState: "APROBADA" },
      ],
      correlativasAprobar: [
        { subjectId: "diseno_interiores_1", requiredState: "APROBADA" },
        { subjectId: "lenguaje_visual_2", requiredState: "APROBADA" },
        { subjectId: "historia_diseno_interiores_equipamiento_1", requiredState: "APROBADA" },
        { subjectId: "tecnologia_materiales_1", requiredState: "APROBADA" },
        { subjectId: "confort_ambiental", requiredState: "APROBADA" },
      ],
      cuatrimestre: 0,
      duration: "ANUAL",
    },

    // 1° AÑO
    {
      id: "intro_diseno_proyectual",
      name: "Introducción al Diseño Proyectual",
      year: 1,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 1,
      duration: "ANUAL",
    },
    {
      id: "lenguaje_visual_1",
      name: "Lenguaje Visual I",
      year: 1,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 1,
      duration: "ANUAL",
    },
    {
      id: "sistemas_representacion",
      name: "Sistemas de Representación",
      year: 1,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 1,
      duration: "ANUAL",
    },
    {
      id: "cultura_diseno",
      name: "Cultura y Diseño",
      year: 1,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 1,
      duration: "ANUAL",
    },

    // 2° AÑO
    {
      id: "diseno_interiores_1",
      name: "Diseño de Interiores I",
      year: 2,
      correlativasCursar: [
        { subjectId: "intro_diseno_proyectual", requiredState: "APROBADA" },
        { subjectId: "lenguaje_visual_1", requiredState: "APROBADA" },
        { subjectId: "sistemas_representacion", requiredState: "APROBADA" },
      ],
      correlativasAprobar: [
        { subjectId: "intro_diseno_proyectual", requiredState: "APROBADA" },
        { subjectId: "lenguaje_visual_1", requiredState: "APROBADA" },
        { subjectId: "sistemas_representacion", requiredState: "APROBADA" },
      ],
      cuatrimestre: 2,
      duration: "ANUAL",
    },
    {
      id: "lenguaje_visual_2",
      name: "Lenguaje Visual II",
      year: 2,
      correlativasCursar: [
        { subjectId: "lenguaje_visual_1", requiredState: "APROBADA" },
        { subjectId: "intro_diseno_proyectual", requiredState: "APROBADA" },
        { subjectId: "sistemas_representacion", requiredState: "APROBADA" },
      ],
      correlativasAprobar: [
        { subjectId: "lenguaje_visual_1", requiredState: "APROBADA" },
        { subjectId: "intro_diseno_proyectual", requiredState: "APROBADA" },
        { subjectId: "sistemas_representacion", requiredState: "APROBADA" },
      ],
      cuatrimestre: 2,
      duration: "ANUAL",
    },
    {
      id: "historia_diseno_interiores_equipamiento_1",
      name: "Historia del Diseño de Interiores y Equipamiento I",
      year: 2,
      correlativasCursar: [
        { subjectId: "cultura_diseno", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "cultura_diseno", requiredState: "APROBADA" },
      ],
      cuatrimestre: 2,
      duration: "ANUAL",
    },
    {
      id: "tecnologia_materiales_1",
      name: "Tecnología de los Materiales I",
      year: 2,
      correlativasCursar: [],
      correlativasAprobar: [],
      cuatrimestre: 2,
      duration: "ANUAL",
    },
    {
      id: "confort_ambiental",
      name: "Confort Ambiental",
      year: 2,
      correlativasCursar: [],
      correlativasAprobar: [
        { subjectId: "intro_diseno_proyectual", requiredState: "APROBADA" },
        { subjectId: "lenguaje_visual_1", requiredState: "APROBADA" },
        { subjectId: "sistemas_representacion", requiredState: "APROBADA" },
      ],
      cuatrimestre: 2,
      duration: "ANUAL",
    },

    // 3° AÑO
    {
      id: "diseno_interiores_2",
      name: "Diseño de Interiores II",
      year: 3,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "diseno_interiores_1", requiredState: "APROBADA" },
        { subjectId: "lenguaje_visual_2", requiredState: "APROBADA" },
        { subjectId: "confort_ambiental", requiredState: "REGULAR" },
        { subjectId: "tecnologia_materiales_1", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "diseno_interiores_1", requiredState: "APROBADA" },
        { subjectId: "lenguaje_visual_2", requiredState: "APROBADA" },
      ],
      cuatrimestre: 3,
      duration: "ANUAL",
    },
    {
      id: "historia_diseno_interiores_equipamiento_2",
      name: "Historia del Diseño de Interiores y Equipamiento II",
      year: 3,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "historia_diseno_interiores_equipamiento_1", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "historia_diseno_interiores_equipamiento_1", requiredState: "APROBADA" },
      ],
      cuatrimestre: 3,
      duration: "ANUAL",
    },
    {
      id: "tecnologia_materiales_2",
      name: "Tecnología de los Materiales II",
      year: 3,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "tecnologia_materiales_1", requiredState: "REGULAR" },
        { subjectId: "confort_ambiental", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "tecnologia_materiales_1", requiredState: "APROBADA" },
        { subjectId: "confort_ambiental", requiredState: "APROBADA" },
      ],
      cuatrimestre: 3,
      duration: "ANUAL",
    },
    {
      id: "diseno_equipamiento_1",
      name: "Diseño de Equipamiento I",
      year: 3,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "diseno_interiores_1", requiredState: "APROBADA" },
        { subjectId: "lenguaje_visual_2", requiredState: "APROBADA" },
        { subjectId: "tecnologia_materiales_1", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "diseno_interiores_1", requiredState: "APROBADA" },
        { subjectId: "lenguaje_visual_2", requiredState: "APROBADA" },
      ],
      cuatrimestre: 3,
      duration: "ANUAL",
    },
    {
      id: "estetica",
      name: "Estética",
      year: 3,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
      ],
      correlativasAprobar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
      ],
      cuatrimestre: 3,
      duration: "ANUAL",
    },
    {
      id: "organizacion_practica_profesional",
      name: "Organización y Práctica Profesional",
      year: 3,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "tecnologia_materiales_1", requiredState: "REGULAR" },
        { subjectId: "confort_ambiental", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "tecnologia_materiales_1", requiredState: "APROBADA" },
        { subjectId: "confort_ambiental", requiredState: "APROBADA" },
      ],
      cuatrimestre: 3,
      duration: "ANUAL",
    },

    // 4° AÑO
    {
      id: "diseno_interiores_3",
      name: "Diseño de Interiores III",
      year: 4,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "anio2_completo", requiredState: "APROBADA" },
        { subjectId: "diseno_interiores_2", requiredState: "APROBADA" },
        { subjectId: "diseno_equipamiento_1", requiredState: "APROBADA" },
        { subjectId: "tecnologia_materiales_2", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "diseno_interiores_2", requiredState: "APROBADA" },
        { subjectId: "diseno_equipamiento_1", requiredState: "APROBADA" },
      ],
      cuatrimestre: 4,
      duration: "ANUAL",
    },
    {
      id: "historia_diseno_interiores_equipamiento_3",
      name: "Historia del Diseño de Interiores y Equipamiento III",
      year: 4,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "anio2_completo", requiredState: "APROBADA" },
        { subjectId: "historia_diseno_interiores_equipamiento_2", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "historia_diseno_interiores_equipamiento_2", requiredState: "APROBADA" },
      ],
      cuatrimestre: 4,
      duration: "ANUAL",
    },
    {
      id: "diseno_equipamiento_2",
      name: "Diseño de Equipamiento II",
      year: 4,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "anio2_completo", requiredState: "APROBADA" },
        { subjectId: "diseno_equipamiento_1", requiredState: "APROBADA" },
        { subjectId: "diseno_interiores_2", requiredState: "APROBADA" },
        { subjectId: "tecnologia_materiales_2", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "diseno_equipamiento_1", requiredState: "APROBADA" },
        { subjectId: "diseno_interiores_2", requiredState: "APROBADA" },
      ],
      cuatrimestre: 4,
      duration: "ANUAL",
    },
    {
      id: "legislacion_etica_profesional",
      name: "Legislación y Ética Profesional",
      year: 4,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "anio2_completo", requiredState: "APROBADA" },
        { subjectId: "organizacion_practica_profesional", requiredState: "REGULAR" },
        { subjectId: "tecnologia_materiales_2", requiredState: "REGULAR" },
      ],
      correlativasAprobar: [
        { subjectId: "organizacion_practica_profesional", requiredState: "APROBADA" },
        { subjectId: "tecnologia_materiales_2", requiredState: "APROBADA" },
      ],
      cuatrimestre: 4,
      duration: "ANUAL",
    },
    {
      id: "psicologia_especifica",
      name: "Psicología Específica",
      year: 4,
      correlativasCursar: [],
      correlativasAprobar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "anio2_completo", requiredState: "APROBADA" },
      ],
      cuatrimestre: 4,
      duration: "ANUAL",
    },
    {
      id: "electiva_obligatoria_1",
      name: "Electiva Obligatoria I",
      year: 4,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "anio2_completo", requiredState: "APROBADA" },
      ],
      correlativasAprobar: [],
      cuatrimestre: 4,
      duration: "ANUAL",
    },
    {
      id: "electiva_obligatoria_2",
      name: "Electiva Obligatoria II",
      year: 4,
      correlativasCursar: [
        { subjectId: "anio1_completo", requiredState: "APROBADA" },
        { subjectId: "anio2_completo", requiredState: "APROBADA" },
      ],
      correlativasAprobar: [],
      cuatrimestre: 4,
      duration: "ANUAL",
    },
  ],
};