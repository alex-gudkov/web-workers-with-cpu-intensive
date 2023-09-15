import { fibonacci } from './fibonacci.js';

const FIBONACCI_POSITION = 40;

function countFibonacciNumberInMainThread() {
  const n = FIBONACCI_POSITION;
  const result = fibonacci(n);

  return result;
}

export function runLocal() {
  console.log('Local started');

  const result = countFibonacciNumberInMainThread();

  console.log('Local result:', result);
}
