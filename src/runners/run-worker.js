import { FIBONACCI_NUMBER_POSITION } from '../fibonacci/fibonacci-number-position.js';

async function countFibonacciNumberInOtherThread() {
  const worker = new Worker('./src/runners/thread.js', { type: 'module' });

  const position = FIBONACCI_NUMBER_POSITION;
  const result = await new Promise((resolve, reject) => {
    worker.onmessage = (event) => {
      resolve(event.data);
    };

    worker.onerror = (event) => {
      reject(event.error);
    };

    const data = {
      position,
    };

    worker.postMessage(data);
  });

  worker.terminate();

  return result;
}

export async function runWorker() {
  console.log('Worker started');

  const result = await countFibonacciNumberInOtherThread();

  console.log('Worker result:', result);
}
