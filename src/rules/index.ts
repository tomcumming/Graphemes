import { Property } from "../property";

import gb3 from "./gb3";
import gb4 from "./gb4";
import gb5 from "./gb5";
import gb6 from "./gb6";
import gb7 from "./gb7";
import gb8 from "./gb8";
import gb9 from "./gb9";
import gb11 from "./gb11";
import gb12_13 from "./gb12-13";

export enum StepResult {
  Break,
  DontBreak,
  Continue
}

export interface Rule {
  step(next: Property, cp: string): StepResult;
}

export function allRules(): Rule[] {
  return [gb3(), gb4(), gb5(), gb6(), gb7(), gb8(), gb9(), gb11(), gb12_13()];
}
