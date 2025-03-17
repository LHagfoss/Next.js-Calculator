import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
  test('should return 1 for n=1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('should return 1 for n=2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('should return 2 for n=3', () => {
    expect(fibonacci(3)).toBe(2);
  });

  test('should return 5 for n=5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('should return 55 for n=10', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('should throw error for non-positive numbers', () => {
    expect(() => fibonacci(0)).toThrow('Fibonacci is not defined for non-positive numbers');
    expect(() => fibonacci(-1)).toThrow('Fibonacci is not defined for non-positive numbers');
  });
});