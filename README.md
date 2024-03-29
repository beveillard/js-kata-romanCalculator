# Roman Calculator

## Problem Description

Write a function that adds two roman numbers. As we are in Rome, there is no such thing as decimals or int, we need to do this with the strings.

```javascript
add("I", "IV"); // "V"
add("XIV", "LX"); // "LXXIV"
```

Roman numerals are I, V, X, L, C, D, M, which means one, five, ten, fifty, hundred, fivehundred and a thousand respectively.

There are some rules to a Roman number:
- Numerals can be concatenated to form a larger numeral: `"XX" + "II" = "XXII"`
- If a lesser numeral is put before a bigger it means subtraction of the lesser from the bigger: `"IV"` means four, `"CM"` means ninehundred
- If the numeral is I, X or C you can’t have more than three `"II" + "II" = "IV"`
- If the numeral is V, L or D you can’t have more than one `"D" + "D" = "M"`

## Clues

String grouping and concatenation is key to solving this kata. But remember the rule that lesser numerals can preceede bigger ones.

https://codingdojo.org/kata/RomanCalculator/

## Run
npm test
