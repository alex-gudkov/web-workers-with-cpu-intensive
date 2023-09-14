export function countFibonacciNumberInOtherThread(n) {
  const worker = new Worker('./thread.js', { type: 'module' });

  return new Promise((resolve, reject) => {
    worker.addEventListener('message', (event) => {
      resolve(event.data);
    });

    worker.addEventListener('error', (event) => {
      reject(event.error);
    });

    worker.postMessage({ n });
  });
}
