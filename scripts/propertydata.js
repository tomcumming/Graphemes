const fs = require("fs");

const contents = fs.readFileSync("data/GraphemeBreakProperty.txt", "utf8");

const rows = contents
  .split("\n")
  .filter(line => !line.startsWith("#") && line !== "")
  .map(line => {
    const match = line.match(/^(\w+)(\.\.\w+)?\s+;\s+(\S+)\s+#/);
    return [
      match[1],
      match[2] === undefined ? match[1] : match[2].substr(2),
      match[3]
    ];
  })
  .sort((a, b) => parseInt(`0x${a[0]}`) - parseInt(`0x${b[0]}`));

const sourceFile = `export default [
${rows
  .map(r => `  [0x${r[0].toLowerCase()}, 0x${r[1].toLowerCase()}, "${r[2]}"],`)
  .join("\n")}
] as [number, number, string][];
`;

fs.writeFileSync("src/propertydata.ts", sourceFile);
