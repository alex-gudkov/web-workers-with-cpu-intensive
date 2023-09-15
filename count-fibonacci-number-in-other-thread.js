const FIBONACCI_POSITION = 40;

export async function countFibonacciNumberInOtherThread() {
  console.log('Worker started');

  const worker = new Worker('./thread.js', { type: 'module' });

  const n = FIBONACCI_POSITION;

  const result = await new Promise((resolve, reject) => {
    worker.onmessage = (event) => {
      resolve(event.data);
    };

    worker.onerror = (event) => {
      reject(event.error);
    };

    worker.postMessage({ n });
  });

  worker.terminate();

  console.log('Worker result:', result);
}
