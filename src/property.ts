import data from "./propertydata";

export enum Property {
  CR,
  LF,
  Control,
  Extends,
  ZWJ,
  RegionalIndicator,
  Prepend,
  SpacingMark,
  L,
  V,
  T,
  LV,
  LVT,
  Other
}

function parseProperty(name: string): Property {
  switch (name) {
    case "CR":
      return Property.CR;
    case "LF":
      return Property.LF;
    case "Control":
      return Property.Control;
    case "Extends":
      return Property.Extends;
    case "ZWJ":
      return Property.ZWJ;
    case "Regional_Indicator":
      return Property.RegionalIndicator;
    case "Prepend":
      return Property.Prepend;
    case "SpacingMark":
      return Property.SpacingMark;
    case "L":
      return Property.L;
    case "V":
      return Property.V;
    case "T":
      return Property.T;
    case "LV":
      return Property.LV;
    case "LVT":
      return Property.LVT;
  }

  throw new Error(`Unknown property: '${name}'`);
}

export default function getProperty(codePoint: string): Property {
  const cp = codePoint.codePointAt(0);

  let low = 0;
  let high = data.length;

  while (low < high) {
    const range = high - low;
    const mid = Math.floor(range / 2);

    const midRow = data[mid];
    if (midRow[0] > cp) high = mid - 1;
    else if (midRow[1] < cp) low = mid + 1;
    else return parseProperty(midRow[2]);
  }

  return Property.Other;
}
