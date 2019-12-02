import { Rule, StepResult } from ".";
import { Property } from "../property";

enum State {
  PE,
  PEZ,
  Other
}

export default function gb11(): Rule {
  let last = State.Other;
  return {
    step(next, cp) {
      const extendedPic = /^\p{Extended_Pictographic}$/u.test(cp);
      const hit = last === State.PEZ && extendedPic;
      if (last === State.PE && next === Property.Extend) last = State.PE;
      else if (last === State.PE && next === Property.ZWJ) last = State.PEZ;
      else if (extendedPic) last = State.PE;
      else last = State.Other;
      return hit ? StepResult.DontBreak : StepResult.Continue;
    }
  };
}
