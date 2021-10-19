import { formatNumber } from './helpers';

test('format number', () => {
  let a = 12.3456789;
  let result = formatNumber(a, 2);
  expect(result).toBe('12.35');

  a = 0.01123355;
  expect(formatNumber(a, 3)).toBe('0.011');
  expect(formatNumber(a, 4)).toBe('0.0112');
  expect(formatNumber(a, 5)).toBe('0.01123');
});
