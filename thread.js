import { fibonacci } from './fibonacci.js';

console.log(self);

self.onmessage = (event) => {
  console.log('onmessage', event);

  const n = parseInt(event.data.n);

  const result = fibonacci(n);

  self.postMessage(result);
};
