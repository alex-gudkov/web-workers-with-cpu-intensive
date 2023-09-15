import { countFibonacciNumberInOtherThread } from './count-fibonacci-number-in-other-thread.js';
import { countFibonacciNumberInMainThread } from './count-fibonacci-number-in-main-thread.js';

const buttonLocal = document.getElementById('button-local');
const buttonWorker = document.getElementById('button-worker');

buttonLocal.addEventListener('click', () => {
  countFibonacciNumberInMainThread();
});

buttonWorker.addEventListener('click', () => {
  countFibonacciNumberInOtherThread();
});
