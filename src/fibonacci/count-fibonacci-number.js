/**
 * @param {number} position
 * @returns {number} The Fibonacci number at the given position.
 */
export function countFibonacciNumber(position) {
  if (position <= 0) {
    return 0;
  }

  if (position === 1) {
    return 1;
  }

  if (position === 2) {
    return 1;
  }

  return countFibonacciNumber(position - 1) + countFibonacciNumber(position - 2);
}
