import type { CareerMap } from "../../domain/types";
import { materiasCarrera } from "../materiasCarrera";
import { mockCareer } from "./mockCareer";
import { fotografia } from "./fotografia";
import { disenoInteriores } from "./disenoInteriores";

export const careers: CareerMap[] = [materiasCarrera, mockCareer, fotografia, disenoInteriores];
