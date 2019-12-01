import { Rule, StepResult } from ".";
import { Property } from "../property";

function logic(next: Property, last: Property): StepResult {
  if (next === Property.Extend || next === Property.ZWJ)
    return StepResult.DontBreak;
  // GB9a
  else if (next === Property.SpacingMark) return StepResult.DontBreak;
  // GB9b
  else if (last === Property.Prepend) return StepResult.DontBreak;
  else return StepResult.Continue;
}

export default function gb9(): Rule {
  let last = Property.Other;

  return {
    step(next): StepResult {
      const result = logic(next, last);
      last = next;
      return result;
    }
  };
}
