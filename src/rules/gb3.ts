import { Rule, StepResult } from ".";
import { Property } from "../property";

export default function gb3(): Rule {
  let last = Property.Other;

  return {
    step(next) {
      const hit = last === Property.CR && next === Property.LF;
      last = next;
      return hit ? StepResult.DontBreak : StepResult.Continue;
    }
  };
}
