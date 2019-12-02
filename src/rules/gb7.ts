import { Rule, StepResult } from ".";
import { Property } from "../property";

export default function gb7(): Rule {
  let last = Property.Other;

  return {
    step(next) {
      const hit =
        (last === Property.LV || last === Property.V) &&
        (next === Property.V || next === Property.T);
      last = next;
      return hit ? StepResult.DontBreak : StepResult.Continue;
    }
  };
}
