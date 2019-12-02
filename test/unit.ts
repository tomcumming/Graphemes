import "mocha";
import * as assert from "assert";
import { lookupProperty, Property } from "../src/property";
import { StepResult } from "../src/rules";
import gb12_13 from "../src/rules/gb12-13";
import { parseEntry } from "./testdata";

describe("Property lookup", () => {
  it("Can find a CR", () => {
    const p = lookupProperty("\r");
    assert.equal(p, Property.CR);
  });

  it("Can find REGIONAL INDICATOR SYMBOL LETTER A", () => {
    assert.equal(
      lookupProperty(String.fromCodePoint(0x1f1e6)),
      Property.RegionalIndicator
    );
  });
});

describe("RI breaks (GB12 & 13)", () => {
  it("Does not break between two RIs", () => {
    const rule = gb12_13();
    assert.equal(rule.step(Property.RegionalIndicator), StepResult.Continue);
    assert.equal(rule.step(Property.RegionalIndicator), StepResult.DontBreak);
    assert.equal(rule.step(Property.RegionalIndicator), StepResult.Continue);
    assert.equal(rule.step(Property.RegionalIndicator), StepResult.DontBreak);
    assert.equal(rule.step(Property.RegionalIndicator), StepResult.Continue);
    assert.equal(rule.step(Property.RegionalIndicator), StepResult.DontBreak);
    assert.equal(rule.step(Property.RegionalIndicator), StepResult.Continue);
  });
});

describe("Parses a test case properly", () => {
  it("Parses line #205", () => {
    const parsed = parseEntry(
      "÷ 1F1E6 × 1F1E6 ÷	#  ÷ [0.2] REGIONAL INDICATOR SYMBOL LETTER A (RI) × [12.0] REGIONAL INDICATOR SYMBOL LETTER A (RI) ÷ [0.3]"
    );
    assert.deepStrictEqual(parsed, {
      codePoints: [
        { breakBefore: true, char: String.fromCodePoint(0x1f1e6) },
        { breakBefore: false, char: String.fromCodePoint(0x1f1e6) }
      ],
      string: String.fromCodePoint(0x1f1e6) + String.fromCodePoint(0x1f1e6),
      description:
        "÷ [0.2] REGIONAL INDICATOR SYMBOL LETTER A (RI) × [12.0] REGIONAL INDICATOR SYMBOL LETTER A (RI) ÷ [0.3]"
    });
  });
});
