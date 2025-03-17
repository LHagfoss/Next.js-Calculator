import { factorial } from './factorial';

describe('factorial', () => {
  test('should return 1 for 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('should return 1 for 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('should return 120 for 5', () => {
    expect(factorial(5)).toBe(120);
  });

  test('should throw error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
  });
});