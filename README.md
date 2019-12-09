# Graphemes

## A JavaScript library to convert a string into an array of graphemes, following the Unicode 12 Text Segmentation spec

*aka Unicode® Standard Annex #29*

- Easy `String -> String[]` usage
- Also handles streaming for huge text
    - Iterator of code points in
    - Iterator of graphemes out
- Passes the Unicode 12 grapheme test suite
- Straightforward, Modern Typescript implementation
- Zero dependencies!

## Usage

```bash
npm i graphemes
```

- This code uses [Unicode property escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) so be sure to include `@babel/plugin-proposal-unicode-property-regex` if you plan to target Firefox and Edge. [Example here](example)

## Example

```javascript
const graphemes = require('graphemes');

const text = '각กำg̈';

console.log('Code points:', Array.from(text));
console.log('Graphemes:', graphemes.default(text));

/*
Code points: ['ᄀ', 'ᅡ', 'ᆨ','ก', 'ำ', 'g','̈']
Graphemes: [ '각', 'กำ', 'g̈' ]
*/
```
