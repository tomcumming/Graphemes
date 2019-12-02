import { Rule, StepResult } from ".";
import { Property } from "../property";

export default function gb6(): Rule {
  let last = Property.Other;

  return {
    step(next) {
      const hit =
        last === Property.L &&
        (next === Property.L ||
          next === Property.V ||
          next === Property.LV ||
          next === Property.LVT);
      last = next;
      return hit ? StepResult.DontBreak : StepResult.Continue;
    }
  };
}
