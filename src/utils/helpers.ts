import BigNumber from 'bignumber.js';

export function formatAddress(address: string, first = 10, last = -4) {
  if (!address) return '';
  return `${address.slice(0, first)}...${address.slice(last)}`;
}

export function formatNumber(number: any, precision = 0) {
  if (!number) return 0;
  if (number > 0 && number < 1) return toMeaningfulNumber(+number);

  let bigNumber = new BigNumber(number);
  let formattedNumber = bigNumber.toFormat(precision);
  const numberParts = formattedNumber.split('.');

  if (numberParts.length === 2 && !+numberParts[1]) {
    formattedNumber = numberParts[0];
  }

  return formattedNumber;
}

export function toMeaningfulNumber(number: number): number {
  const meaningfulNumber = number.toFixed(20).match(/^-?\d*\.?0*\d{0,4}/);
  if (!meaningfulNumber) return 0;
  return +meaningfulNumber[0];
}
