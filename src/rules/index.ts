import { Property } from "../property";

import gb9 from "./gb9";

export enum StepResult {
  Break,
  DontBreak,
  Continue
}

export interface Rule {
  step(next: Property): StepResult;
}

export function allRules(): Rule[] {
  return [gb9()];
}
