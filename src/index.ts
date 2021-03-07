export function addRomanNumbers(number1: string, number2: string): string {
  let expendedSum = addExpendedRomanNumbers(
    expandRomanNumber(number1),
    expandRomanNumber(number2)
  );
  return canonifyRomanNumber(condenseRomanNumber(expendedSum));
}

export function expandRomanNumber(number: string): string {
  return number
    .replace('CM', 'DCCCC')
    .replace('CD', 'CCCC')
    .replace('XC', 'LXXXX')
    .replace('XL', 'XXXX')
    .replace('IX', 'VIIII')
    .replace('IV', 'IIII');
}

export function condenseRomanNumber(expNumber: string): string {
  let candidate = expNumber
    .replace('IIIII', 'V')
    .replace('VV', 'X')
    .replace('XXXXX', 'L')
    .replace('LL', 'C')
    .replace('CCCCC', 'D')
    .replace('DD', 'M');

  if (candidate != expNumber)
    return condenseRomanNumber(candidate);
  return candidate;
}

export function canonifyRomanNumber(expNumber: string): string {
  return expNumber
    .replace('DCCCC', 'CM')
    .replace('CCCC', 'CD')
    .replace('LXXXX', 'XC')
    .replace('XXXX', 'XL')
    .replace('VIIII', 'IX')
    .replace('IIII', 'IV');
}

export function addExpendedRomanNumbers(number1: string, number2: string): string {
  let concatNumbers = number1 + number2;
  let sum =
    (concatNumbers.match(/M+/g) || "").toString().replace(",", "") +
    (concatNumbers.match(/D+/g) || "").toString().replace(",", "") +
    (concatNumbers.match(/C+/g) || "").toString().replace(",", "") +
    (concatNumbers.match(/L+/g) || "").toString().replace(",", "") +
    (concatNumbers.match(/X+/g) || "").toString().replace(",", "") +
    (concatNumbers.match(/V+/g) || "").toString().replace(",", "") +
    (concatNumbers.match(/I+/g) || "").toString().replace(",", "");
  return sum;
}
