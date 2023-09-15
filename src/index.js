import { countFibonacciNumberInOtherThread } from './runners/run-worker.js';
import { countFibonacciNumberInMainThread } from './runners/run-local.js';
import { Logger } from './logger/logger.js';

const buttonLocal = document.getElementById('button-local');
const buttonWorker = document.getElementById('button-worker');

buttonLocal.onclick = () => {
  const logger = new Logger();
  const startTimestamp = Date.now();

  logger.log('Local started.');

  const result = countFibonacciNumberInMainThread();
  const endTimestamp = Date.now();
  const time = (endTimestamp - startTimestamp) / 1000;

  logger.log('Local result:', result);
  logger.log('Local time:', time);
};

buttonWorker.onclick = async () => {
  const logger = new Logger();
  const startTimestamp = Date.now();

  logger.log('Worker started.');

  try {
    const result = await countFibonacciNumberInOtherThread();
    const endTimestamp = Date.now();
    const time = (endTimestamp - startTimestamp) / 1000;

    logger.log('Worker result:', result);
    logger.log('Worker time:', time);
  } catch (error) {
    logger.log('Worker error:', error);
  }
};
