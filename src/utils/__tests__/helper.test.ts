import { formatNumber } from '../helpers';

test('format number', () => {
  let a = 12.3456789;
  let result = formatNumber(a, 2);
  expect(result).toBe('12.35');

  a = 0.01123355;
  expect(formatNumber(a, 3)).toBe('0.011');
  expect(formatNumber(a, 4)).toBe('0.0112');
  expect(formatNumber(a, 5)).toBe('0.01123');

  a = 10;
  expect(formatNumber(a, 4)).toBe('10');
  expect(formatNumber(a, 2)).toBe('10');

  a = 0.1;
  expect(formatNumber(a, 4)).toBe('0.1');
  expect(formatNumber(a, 2)).toBe('0.1');

  a = 0.01;
  expect(formatNumber(a, 4)).toBe('0.01');

  a = 100000;
  expect(formatNumber(a, 4)).toBe('100,000');

  a = 999999;
  expect(formatNumber(a, 4)).toBe('999,999');

  a = 1000000;
  expect(formatNumber(a, 4)).toBe('1.00e+6');
  a = 1234567;
  expect(formatNumber(a, 4)).toBe('1.23e+6');
});
