export function* fromCodePoints(
  codePoints: Iterable<string>
): IterableIterator<string> {
  for (const cp of codePoints) {
    yield cp;
  }
}

export default function fromString(input: string): IterableIterator<string> {
  return fromCodePoints(Array.from(input));
}
