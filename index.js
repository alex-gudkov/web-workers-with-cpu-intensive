import { runWorker } from './run-worker.js';
import { runLocal } from './run-local.js';

const buttonLocal = document.getElementById('button-local');
const buttonWorker = document.getElementById('button-worker');

buttonLocal.onclick = () => {
  runLocal();
};

buttonWorker.onclick = () => {
  runWorker();
};
