import { Rule, StepResult } from ".";
import { Property } from "../property";

export default function gb5(): Rule {
  return {
    step(next) {
      const hit =
        next === Property.Control ||
        next === Property.CR ||
        next === Property.LF;
      return hit ? StepResult.Break : StepResult.Continue;
    }
  };
}
