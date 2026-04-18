import type { CareerMap } from "../../domain/types";
import { materiasCarrera } from "../materiasCarrera";
// (mockCareer eliminado)
import { fotografia } from "./fotografia";
import { disenoInteriores } from "./disenoInteriores";
import { diseñoSonido } from "./diseñoSonido";

export const careers: CareerMap[] = [materiasCarrera, fotografia, disenoInteriores, diseñoSonido];
