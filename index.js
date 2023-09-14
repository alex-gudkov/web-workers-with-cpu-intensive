import { fibonacci } from './fibonacci.js';

console.log(import.meta);

const buttonLocal = document.getElementById('button-local');
const buttonWorker = document.getElementById('button-worker');

buttonLocal.addEventListener('click', () => {
  console.log('#button-local clicked');

  const result = fibonacci(42);

  console.log('result', result);
});

buttonWorker.addEventListener('click', () => {
  console.log('#button-worker clicked');
});
