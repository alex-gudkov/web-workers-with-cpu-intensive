import { fibonacci } from './fibonacci.js';

const FIBONACCI_POSITION = 40;

export function countFibonacciNumberInMainThread() {
  const n = FIBONACCI_POSITION;

  const result = fibonacci(n);

  return result;
}
