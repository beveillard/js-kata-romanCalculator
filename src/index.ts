type RomanNumber = string;

type MatchPattern = RegExp;

interface CanonicalEquivalence {
  canonical: string;
  equivalent: string;
}

interface Equivalence {
  condensed: string;
  expanded: string;
}

const CANONICAL_EQUIVALENCES: CanonicalEquivalence[] = [
  { canonical: "CM", equivalent: "DCCCC" },
  { canonical: "CD", equivalent: "CCCC" },
  { canonical: "XC", equivalent: "LXXXX" },
  { canonical: "XL", equivalent: "XXXX" },
  { canonical: "IX", equivalent: "VIIII" },
  { canonical: "IV", equivalent: "IIII" },
]

const EQUIVALENCES: Equivalence[] = [
  { expanded: "IIIII", condensed: "V" },
  { expanded: "VV", condensed: "X" },
  { expanded: "XXXXX", condensed: "L" },
  { expanded: "LL", condensed: "C" },
  { expanded: "CCCCC", condensed: "D" },
  { expanded: "DD", condensed: "M" },
]

const MATCH_PATTERNS: MatchPattern[] = [
  /M*/g,
  /D*/g,
  /C*/g,
  /L*/g,
  /X*/g,
  /V*/g,
  /I*/g,
];

export function addRomanNumbers(number1: RomanNumber, number2: RomanNumber): RomanNumber {
  const expandedSum = addNonCanonicalRomanNumbers(deCanonifyRomanNumber(number1), deCanonifyRomanNumber(number2));
  const condensedSum = condenseRomanNumber(expandedSum);
  return canonifyRomanNumber(condensedSum);
}

export function canonifyRomanNumber(number: RomanNumber): RomanNumber {
  function canonify(number: RomanNumber, { canonical, equivalent }): RomanNumber {
    return number.replace(equivalent, canonical);
  }

  return CANONICAL_EQUIVALENCES.reduce(canonify, number);
}

export function deCanonifyRomanNumber(number: RomanNumber): RomanNumber {
  function deCanonify(number: RomanNumber, { canonical, equivalent }): RomanNumber {
    return number.replace(canonical, equivalent);
  }

  return CANONICAL_EQUIVALENCES.reduce(deCanonify, number);
}

export function condenseRomanNumber(number: RomanNumber): RomanNumber {
  function condense(number: RomanNumber, { condensed, expanded }): RomanNumber {
    return number.replace(expanded, condensed);
  }

  const candidate = EQUIVALENCES.reduce(condense, number);

  if (candidate != number) {
    return condenseRomanNumber(candidate);
  }

  return candidate;
}

export function addNonCanonicalRomanNumbers(number1: RomanNumber, number2: RomanNumber): RomanNumber {
  const concatNumbers = number1 + number2;

  function construct(number: RomanNumber, pattern: MatchPattern): RomanNumber {
    return number + concatNumbers.match(pattern).join("");
  }

  return MATCH_PATTERNS.reduce(construct, "");
}
