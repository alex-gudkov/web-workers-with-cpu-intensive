import { countFibonacciNumberInOtherThread } from './count-fibonacci-number-in-other-thread.js';
import { countFibonacciNumberInMainThread } from './count-fibonacci-number-in-main-thread.js';

console.log(import.meta);

const buttonLocal = document.getElementById('button-local');
const buttonWorker = document.getElementById('button-worker');

buttonLocal.addEventListener('click', () => {
  console.log('#button-local clicked');

  const result = countFibonacciNumberInMainThread();

  console.log('result', result);
});

buttonWorker.addEventListener('click', async () => {
  console.log('#button-worker clicked');

  const result = await countFibonacciNumberInOtherThread();

  console.log('result', result);
});
