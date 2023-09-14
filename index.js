import { fibonacci } from './fibonacci.js';
import { countFibonacciNumberInOtherThread } from './count-fibonacci-number-in-other-thread.js';

console.log(import.meta);

const buttonLocal = document.getElementById('button-local');
const buttonWorker = document.getElementById('button-worker');

buttonLocal.addEventListener('click', () => {
  console.log('#button-local clicked');

  const result = fibonacci(42);

  console.log('result', result);
});

buttonWorker.addEventListener('click', async () => {
  console.log('#button-worker clicked');

  const result = await countFibonacciNumberInOtherThread(42);

  console.log('result', result);
});
