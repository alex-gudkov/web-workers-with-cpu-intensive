import { fibonacci } from './fibonacci.js';

const FIBONACCI_POSITION = 40;

export function countFibonacciNumberInMainThread() {
  console.log('Local started');

  const n = FIBONACCI_POSITION;
  const result = fibonacci(n);

  console.log('Local result:', result);
}
