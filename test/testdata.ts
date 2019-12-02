import * as fs from "fs";

export type CodePoint = {
  breakBefore: boolean;
  char: string;
};

export type TestEntry = {
  codePoints: CodePoint[];
  string: string;
  description: string;
};

const testDataPath = "data/GraphemeBreakTest.txt";

function parseHex(line: string): { rest: string; number: number } {
  const match = line.match(/^(\w+)\s+/u);
  if (match === null) throw new Error(`Expected hex: '${line}'`);

  return {
    rest: line.substr(match[0].length),
    number: parseInt(`0x${match[1]}`)
  };
}

function parseCodePoint(
  line: string
): "end" | { rest: string; codePoint: CodePoint } {
  const breakBefore = line[0] === "÷";
  line = line.substr(1).trimLeft();

  if (line[0] === "#") {
    return "end";
  } else {
    const result = parseHex(line);
    const char = String.fromCodePoint(result.number);

    return {
      rest: result.rest,
      codePoint: {
        breakBefore,
        char
      }
    };
  }
}

export function parseEntry(line: string): TestEntry {
  let codePoints: CodePoint[] = [];
  while (true) {
    const result = parseCodePoint(line);
    if (result === "end") break;

    line = result.rest;
    codePoints.push(result.codePoint);
  }
  return {
    codePoints,
    string: codePoints.map(cp => cp.char).join(""),
    description: line.split("#")[1].trimLeft()
  };
}

export default function parseData() {
  if (!fs.existsSync(testDataPath))
    throw new Error(`Could not find test data, did you run the fetch script?`);

  const content = fs.readFileSync(testDataPath, { encoding: "utf8" });

  const lines = content
    .split("\n")
    .filter(line => !line.startsWith("#") && line.length > 0);

  return lines.map(parseEntry);
}
