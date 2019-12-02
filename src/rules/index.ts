import { Property } from "../property";

import gb3 from "./gb3";
import gb4 from "./gb4";
import gb5 from "./gb5";
import gb6 from "./gb6";
import gb9 from "./gb9";
import gb12_13 from "./gb12-13";

export enum StepResult {
  Break,
  DontBreak,
  Continue
}

export interface Rule {
  step(next: Property): StepResult;
}

export function allRules(): Rule[] {
  return [gb3(), gb4(), gb5(), gb6(), gb9(), gb12_13()];
}
