import "mocha";
import * as assert from "assert";
import { lookupProperty, Property } from "../src/property";

describe("Property lookup", () => {
  it("Can find a CR", () => {
    const p = lookupProperty("\r");
    assert.equal(p, Property.CR);
  });
});
