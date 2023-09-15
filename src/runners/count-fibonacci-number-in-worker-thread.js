import { FIBONACCI_NUMBER_POSITION } from '../fibonacci/fibonacci-number-position.js';

export async function countFibonacciNumberInWorkerThread() {
  const worker = new Worker('./src/runners/thread.js', { type: 'module' });

  const result = await new Promise((resolve, reject) => {
    worker.onmessage = (event) => {
      resolve(event.data);
    };

    worker.onerror = (event) => {
      reject(event.error);
    };

    const data = {
      position: FIBONACCI_NUMBER_POSITION,
    };

    worker.postMessage(data);
  });

  worker.terminate();

  return result;
}
