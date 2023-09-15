import { fibonacci } from './fibonacci.js';

self.onmessage = function (event) {
  const n = parseInt(event.data.n);
  const result = fibonacci(n);

  self.postMessage(result);
};
