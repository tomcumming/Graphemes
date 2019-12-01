import { Rule, StepResult } from ".";
import { Property } from "../property";

export default function gb4(): Rule {
  let last = Property.Other;

  return {
    step(next) {
      const hit =
        last === Property.Control ||
        last === Property.CR ||
        last === Property.LF;
      last = next;

      return hit ? StepResult.Break : StepResult.Continue;
    }
  };
}
