import { countFibonacciNumber } from '../fibonacci/count-fibonacci-number.js';
import { FIBONACCI_NUMBER_POSITION } from '../fibonacci/fibonacci-number-position.js';

function countFibonacciNumberInMainThread() {
  const position = FIBONACCI_NUMBER_POSITION;
  const result = countFibonacciNumber(position);

  return result;
}

export function runLocal() {
  console.log('Local started');

  const result = countFibonacciNumberInMainThread();

  console.log('Local result:', result);
}
