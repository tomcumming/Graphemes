import * as mocha from "mocha";
import * as assert from "assert";

import graphemes from "../src/lib";
import parseTestData from "./testdata";
import { TestEntry } from "./testdata";

const testCases = parseTestData();

function expectedGraphemes(entry: TestEntry): string[] {
  let graphemes: string[] = [];
  let current = "";
  for (const cp of entry.codePoints) {
    if (cp.breakBefore) {
      graphemes.push(current);
      current = cp.char;
    } else {
      current = current + cp.char;
    }
  }

  return graphemes.concat([current]).filter(s => s !== "");
}

describe("The unicode test cases", () => {
  for (const testCase of testCases) {
    it(testCase.description, () => {
      const expected = expectedGraphemes(testCase);
      const actual = Array.from(graphemes(testCase.string));
      assert.deepStrictEqual(actual, expected);
    });
  }
});
