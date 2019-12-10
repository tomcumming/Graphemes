import { Rule, StepResult, allRules } from "./rules";
import { lookupProperty } from "./property";

/** Converts a stream of code points into a stream of graphemes
 *
 * @param codePoints The input stream of code points
 * @returns A stream of graphemes
 */
export function* fromCodePoints(
  codePoints: Iterable<string>
): IterableIterator<string> {
  const rules: Rule[] = allRules();

  let current: undefined | string;

  for (const cp of codePoints) {
    let result = StepResult.Continue;

    for (const rule of rules) {
      const next = lookupProperty(cp);
      const ruleResult = rule.step(next, cp);
      if (result === StepResult.Continue) result = ruleResult;
    }

    // This handles GB999
    if (result === StepResult.Break || result === StepResult.Continue) {
      if (current !== undefined) yield current;
      current = cp;
    } else if (result === StepResult.DontBreak) {
      if (current === undefined) current = cp;
      else current += cp;
    }
  }

  if (current !== undefined) yield current;
}

/** Converts a string into a stream of graphemes
 *
 * @param input
 */
export function fromString(input: string): IterableIterator<string> {
  return fromCodePoints(Array.from(input));
}

/** Converts a string into an array of graphemes
 *
 * @param input
 */
export function fromStringAsArray(input: string): string[] {
  return Array.from(fromString(input));
}

export default fromStringAsArray;
