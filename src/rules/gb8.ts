import { Rule, StepResult } from ".";
import { Property } from "../property";

export default function gb8(): Rule {
  let last = Property.Other;

  return {
    step(next) {
      const hit =
        (last === Property.LVT || last === Property.T) && next === Property.T;
      last = next;
      return hit ? StepResult.DontBreak : StepResult.Continue;
    }
  };
}
