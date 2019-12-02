import { Rule, StepResult } from ".";
import { Property } from "../property";

export default function gb12_13(): Rule {
  let riCount = 0;

  return {
    step(next) {
      let stopBreak = false;

      if (next === Property.RegionalIndicator) {
        if (riCount % 2 === 1) stopBreak = true;
        riCount += 1;
      } else {
        riCount = 0;
      }

      return stopBreak ? StepResult.DontBreak : StepResult.Continue;
    }
  };
}
