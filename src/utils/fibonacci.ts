export function fibonacci(n: number): number {
  if (n <= 0) throw new Error("Fibonacci is not defined for non-positive numbers");
  if (n === 1 || n === 2) return 1;
  
  let prev = 1;
  let current = 1;
  
  for (let i = 3; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  
  return current;
}