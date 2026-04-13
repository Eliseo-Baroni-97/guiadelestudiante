import type { CareerMap } from "../../domain/types";
import { materiasCarrera } from "../materiasCarrera";
// (mockCareer eliminado)
import { fotografia } from "./fotografia";
import { disenoInteriores } from "./disenoInteriores";

export const careers: CareerMap[] = [materiasCarrera, fotografia, disenoInteriores];
