import { generateArray } from '../utils';

describe('utils test', () => {
  it('should generate array correct', () => {
    const result = generateArray(1, 10);
    expect(result.length).toBe(10);
    expect(result[0]).toBe(1);
    expect(result[result.length - 1]).toBe(10);
  });
});
