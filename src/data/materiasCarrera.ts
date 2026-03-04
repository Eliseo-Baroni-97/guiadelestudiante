import type { CareerMap } from "../domain/types";

export const materiasCarrera: CareerMap = {
  id: "lic-informatica-real",
  name: "Licenciatura en Informática (siglo 21)",
  version: 1,
  policy: {
    priorYearsApproved: false,
  },
  nodes: [
    // MATERIAS DE INGRESO
    { id: "ing1", name: "APRENDER EN EL SIGLO21", year: 0, duration: "ANUAL", correlativas: [], cuatrimestre: 0 },
    { id: "ing2", name: "TECNOLOGÍA, HUMANIDADES Y MODELOS GLOBALES", year: 0, duration: "ANUAL", correlativas: [], cuatrimestre: 0 },

    // PRIMER CUATRIMESTRE
    { id: "cuat1_1", name: "ALGEBRA Y GEOMETRIA", year: 1, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 1 },
    { id: "cuat1_2", name: "ANALISIS MATEMATICO", year: 1, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 1 },
    { id: "cuat1_3", name: "IDIOMA EXTRANJERO I", year: 1, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 1 },
    { id: "cuat1_4", name: "LOGICA SIMBOLICA", year: 1, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 1 },
    { id: "cuat1_5", name: "PROGRAMACION LOGICA", year: 1, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 1 },
    { id: "cuat1_6", name: "SISTEMAS DE INFORMACION", year: 1, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 1 },

    // SEGUNDO CUATRIMESTRE
    { id: "cuat2_1", name: "ARQUITECTURA DEL COMPUTADOR", year: 1, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 2 },
    { id: "cuat2_2", name: "IDIOMA EXTRANJERO II", year: 1, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 2 },
    { id: "cuat2_3", name: "MATEMATICA DISCRETA", year: 1, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 2 },
    { id: "cuat2_4", name: "PROGRAMACION ORIENTADA A OBJETOS", year: 1, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 2 },
    { id: "cuat2_5", name: "CALCULO AVANZADO", year: 1, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 2 },

    // TERCER CUATRIMESTRE
    {
      id: "cuat3_1", name: "ALGORITMOS Y ESTRUCTURA DE DATOS I", year: 2, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat2_4", requiredState: "APROBADA" },
      ], cuatrimestre: 3
    },
    { id: "cuat3_2", name: "ESTADISTICA Y PROBABILIDAD", year: 2, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 3 },
    { id: "cuat3_3", name: "GRUPO Y LIDERAZGO", year: 2, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 3 },
    {
      id: "cuat3_4", name: "IDIOMA EXTRANJERO III", year: 2, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat2_2", requiredState: "APROBADA" },
      ], cuatrimestre: 3
    },
    { id: "cuat3_5", name: "LENGUAJES FORMALES Y COMPUTABILIDAD", year: 2, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 3 },
    { id: "cuat3_6", name: "PRÁCTICA SOLIDARIA", year: 2, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 3 },
    {
      id: "cuat3_7", name: "TALLER DE ALGORITMOS Y ESTRUCTURA DE DATOS I", year: 2, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat2_4", requiredState: "APROBADA" },
      ], cuatrimestre: 3
    },

    // CUARTO CUATRIMESTRE
    { id: "cuat4_1", name: "ADMINISTRACION", year: 2, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 4 },
    {
      id: "cuat4_2", name: "ALGORITMOS Y ESTRUCTURA DE DATOS II", year: 2, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat3_1", requiredState: "APROBADA" },
        { subjectId: "cuat3_7", requiredState: "APROBADA" },
      ], cuatrimestre: 4
    },
    { id: "cuat4_3", name: "BASE DE DATOS I", year: 2, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 4 },
    {
      id: "cuat4_4", name: "IDIOMA EXTRANJERO IV", year: 2, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat3_4", requiredState: "APROBADA" }, // Idioma Extranjero III
      ],
      cuatrimestre: 4
    },
    { id: "cuat4_5", name: "TALLER DE ALGORITMOS Y ESTRUCTURAS DE DATOS II", year: 2, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 4 },

    // QUINTO CUATRIMESTRE
    {
      id: "cuat5_1", name: "IDIOMA EXTRANJERO V", year: 3, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat4_4", requiredState: "APROBADA" }, // Idioma Extranjero IV
      ],
      cuatrimestre: 5
    },
    {
      id: "cuat5_2", name: "PRUEBAS DE SISTEMAS", year: 3, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat1_4", requiredState: "APROBADA" }, // Lógica Simbólica
      ],
      cuatrimestre: 5
    },
    {
      id: "cuat5_3", name: "SISTEMAS OPERATIVOS", year: 3, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat2_1", requiredState: "APROBADA" }, // Arquitectura del Computador
      ],
      cuatrimestre: 5
    },
    {
      id: "cuat5_4", name: "ANALISIS Y DISEÑO DE SOFTWARE", year: 3, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat4_2", requiredState: "APROBADA" }, // Algoritmos y Estructura de Datos II
        { subjectId: "cuat4_5", requiredState: "APROBADA" }, // Taller de Algoritmos y Estructuras de Datos II
      ],
      cuatrimestre: 5
    },
    { id: "cuat5_5", name: "PRINCIPIOS DE ECONOMIA", year: 3, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 5 },

    // SEXTO CUATRIMESTRE
    { id: "cuat6_1", name: "DESARROLLO EMPRENDEDOR", year: 3, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 6 },
    { id: "cuat6_2", name: "IDIOMA EXTRANJERO VI", year: 3, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 6 },
    {
      id: "cuat6_3", name: "ALGORITMOS CONCURRENTES Y PARALELOS", year: 3, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat2_4", requiredState: "APROBADA" }, // Programación Orientada a Objetos
      ],
      cuatrimestre: 6
    },
    {
      id: "cuat6_4", name: "INGENIERIA DE SOFTWARE", year: 3, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat5_4", requiredState: "APROBADA" }, // Análisis y Diseño de Software
      ],
      cuatrimestre: 6
    },
    {
      id: "cuat6_5", name: "SEMINARIO DE PRÁCTICA DE INFORMATICA", year: 3, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat5_4", requiredState: "APROBADA" }, // Análisis y Diseño de Software
        { subjectId: "cuat4_3", requiredState: "APROBADA" }, // Base de Datos I
        { subjectId: "cuat5_2", requiredState: "APROBADA" }, // Pruebas de Sistemas
      ],
      cuatrimestre: 6
    },
    {
      id: "cuat6_6", name: "COMUNICACIONES", year: 3, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat5_3", requiredState: "APROBADA" }, // Sistemas Operativos
      ],
      cuatrimestre: 6
    },

    // SEPTIMO CUATRIMESTRE
    {
      id: "cuat7_1", name: "DESARROLLO DE APLIC. CON BASES DE DATOS", year: 4, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat4_3", requiredState: "APROBADA" }, // Base de Datos I
      ],
      cuatrimestre: 7
    },
    { id: "cuat7_2", name: "EMPRENDIMIENTOS UNIVERSITARIOS", year: 4, duration: "PRIMER_SEMESTRE", correlativas: [], cuatrimestre: 7 },
    {
      id: "cuat7_3", name: "SEGURIDAD INFORMATICA", year: 4, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat5_3", requiredState: "APROBADA" }, // Sistemas Operativos
      ],
      cuatrimestre: 7
    },
    {
      id: "cuat7_4", name: "REDES", year: 4, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat5_3", requiredState: "APROBADA" }, // Sistemas Operativos
        { subjectId: "cuat6_6", requiredState: "APROBADA" }, // Comunicaciones
      ],
      cuatrimestre: 7
    },

    // OCTAVO CUATRIMESTRE
    { id: "cuat8_1", name: "AUDITORIA DE SISTEMAS", year: 4, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 8 },
    {
      id: "cuat8_2", name: "DESARROLLO WEB", year: 4, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat2_4", requiredState: "APROBADA" }, // Programación Orientada a Objetos
      ],
      cuatrimestre: 8
    },
    {
      id: "cuat8_3", name: "PROGRAMACION CLIENTE-SERVIDOR", year: 4, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat7_4", requiredState: "APROBADA" }, // Redes
      ],
      cuatrimestre: 8
    },
    {
      id: "cuat8_4", name: "BASE DE DATOS II", year: 4, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat7_1", requiredState: "APROBADA" }, // Desarrollo de Aplic. con Bases de Datos
      ],
      cuatrimestre: 8
    },
    {
      id: "cuat8_5", name: "SISTEMAS OPERATIVOS AVANZADOS", year: 4, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat5_3", requiredState: "APROBADA" }, // Sistemas Operativos
      ],
      cuatrimestre: 8
    },

    // NOVENO CUATRIMESTRE
    {
      id: "cuat9_1", name: "CALIDAD DE SOFTWARE", year: 5, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat6_4", requiredState: "APROBADA" }, // Ingeniería de Software
        { subjectId: "cuat6_5", requiredState: "APROBADA" }, // Seminario de Práctica de Informática
      ],
      cuatrimestre: 9
    },
    {
      id: "cuat9_2", name: "HERRAMIENTAS MATEMATICAS VI - MODELOS DE SIMULACION", year: 5, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat2_3", requiredState: "APROBADA" }, // Matemática Discreta
      ],
      cuatrimestre: 9
    },
    {
      id: "cuat9_3", name: "INTELIGENCIA ARTIFICIAL", year: 5, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat3_5", requiredState: "APROBADA" }, // Lenguajes Formales y Computabilidad
        { subjectId: "cuat2_5", requiredState: "APROBADA" }, // Cálculo Avanzado
      ],
      cuatrimestre: 9
    },
    {
      id: "cuat9_4", name: "PRÁCTICA PROFESIONAL DE INFORMÁTICA", year: 5, duration: "PRIMER_SEMESTRE", correlativas: [
        { subjectId: "cuat5_4", requiredState: "APROBADA" }, // Análisis y Diseño de Software
        { subjectId: "cuat6_4", requiredState: "APROBADA" }, // Ingeniería de Software
        { subjectId: "cuat4_3", requiredState: "APROBADA" }, // Base de Datos I
        { subjectId: "cuat6_5", requiredState: "APROBADA" }, // Seminario de Práctica de Informática
      ],
      cuatrimestre: 9
    },

    // DECIMO CUATRIMESTRE
    {
      id: "cuat10_1", name: "GESTION DE PROYECTOS DE INFRAESTRUCTURA", year: 5, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat8_1", requiredState: "APROBADA" }, // Auditoría de Sistemas
        { subjectId: "cuat7_4", requiredState: "APROBADA" }, // Redes
      ],
      cuatrimestre: 10
    },
    {
      id: "cuat10_2", name: "SEMINARIO FINAL DE INFORMÁTICA", year: 5, duration: "SEGUNDO_SEMESTRE", correlativas: [
        { subjectId: "cuat9_4", requiredState: "APROBADA" }, // Práctica Profesional de Informática
        { subjectId: "cuat9_1", requiredState: "APROBADA" }, // Calidad de Software
        { subjectId: "cuat7_3", requiredState: "APROBADA" }, // Seguridad Informática
        { subjectId: "cuat6_5", requiredState: "APROBADA" }, // Seminario de Práctica de Informática
      ],
      cuatrimestre: 10
    },
    { id: "cuat10_3", name: "ETICA Y DEONTOLOGIA PROFESIONAL", year: 5, duration: "SEGUNDO_SEMESTRE", correlativas: [], cuatrimestre: 10 },
  ],
};
