const FIBONACCI_POSITION = 40;

export function countFibonacciNumberInOtherThread() {
  const worker = new Worker('./thread.js', { type: 'module' });

  return new Promise((resolve, reject) => {
    worker.addEventListener('message', (event) => {
      resolve(event.data);
    });

    worker.addEventListener('error', (event) => {
      reject(event.error);
    });

    const n = FIBONACCI_POSITION;

    worker.postMessage({ n });
  });
}
