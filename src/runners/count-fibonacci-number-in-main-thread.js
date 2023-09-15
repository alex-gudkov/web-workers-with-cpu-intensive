import { countFibonacciNumber } from '../fibonacci/count-fibonacci-number.js';
import { FIBONACCI_NUMBER_POSITION } from '../fibonacci/fibonacci-number-position.js';

/**
 * @returns {number}
 */
export function countFibonacciNumberInMainThread() {
  const result = countFibonacciNumber(FIBONACCI_NUMBER_POSITION);

  return result;
}
