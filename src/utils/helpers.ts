import BigNumber from 'bignumber.js';
import RelativeTime from '@yaireo/relative-time';
import { shortenAddress as shortenAddressLib } from '@quangkeu1995/dappcore';

const UPPER_LIMIT_FORMAT = 1000000;

export function formatAddress(address: string, first = 10, last = -4) {
  if (!address) return '';
  return `${address.slice(0, first)}...${address.slice(last)}`;
}

/**
 *
 * @param number Number in string of number
 * @param precision numbers of decimals
 * @returns formatted number in string format
 */
export function formatNumber(number: string | number, precision = 0): string {
  if (!number) return '0';
  if (number > 0 && number < 1) return toMeaningfulNumber(+number, precision);

  let bigNumber = new BigNumber(number);
  if (bigNumber.comparedTo(UPPER_LIMIT_FORMAT) >= 0) {
    return abbreviateNumber(bigNumber.toNumber());
  }
  let formattedNumber = bigNumber.toFormat(precision);
  const numberParts = formattedNumber.split('.');

  if (numberParts.length === 2 && !+numberParts[1]) {
    formattedNumber = numberParts[0];
  }

  return formattedNumber;
}

export function toMeaningfulNumber(number: number, precision: number): string {
  let bigNumber = new BigNumber(number);
  if (bigNumber.dp() < precision) {
    return bigNumber.toString();
  }

  return bigNumber.toFixed(precision);
}

export function getEnumKey(enumInput: any, value: string): string {
  const result = Object.keys(enumInput).find(item => {
    return enumInput[item] === value;
  });
  if (result) {
    return result;
  }
  return '';
}

export function safeMul(a: number, b: number): number {
  const aBig = new BigNumber(a);
  const bBig = new BigNumber(b);
  const result = aBig.multipliedBy(bBig);
  return result.toNumber();
}

export function getRelativeTime(timestamp: number): string {
  const relativeTime = new RelativeTime();
  return relativeTime.from(new Date(timestamp * 1000));
}

export function shortenAddress(address: string): string {
  if (address === '' || address === '0x') {
    return '';
  }
  return shortenAddressLib(address);
}

function abbreviateNumber(value: number): string {
  let newValue = value;
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixNum = 0;
  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }

  let result = newValue.toPrecision(3);

  result += suffixes[suffixNum];
  return result;
}
