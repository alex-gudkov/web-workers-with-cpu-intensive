import { countFibonacciNumber } from '../fibonacci/count-fibonacci-number.js';

self.onmessage = (event) => {
  const position = parseInt(event.data.position);
  const result = countFibonacciNumber(position);

  self.postMessage(result);
};
