# Grapheme Clusters

## A JavaScript library to convert a string into an array of graphemes, following the Unicode 12 Text Segmentation spec

*aka Unicode® Standard Annex #29*

- Easy `String -> String[]` usage
- Also handles streaming for huge text
    - Code points in
    - Iterator of graphemes out
- Passes the Unicode 12 grapheme test suite
- Straightforward, Modern Typescript implementation
- Zero dependencies!

## Usage

```bash
npm i graphemes
```

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
