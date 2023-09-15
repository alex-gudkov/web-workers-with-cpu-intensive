import { runWorker } from './runners/run-worker.js';
import { runLocal } from './runners/run-local.js';

const buttonLocal = document.getElementById('button-local');
const buttonWorker = document.getElementById('button-worker');

buttonLocal.onclick = () => {
  runLocal();
};

buttonWorker.onclick = () => {
  runWorker();
};
