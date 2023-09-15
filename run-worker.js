const FIBONACCI_POSITION = 40;

async function countFibonacciNumberInOtherThread() {
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

  return result;
}

export async function runWorker() {
  console.log('Worker started');

  const result = await countFibonacciNumberInOtherThread();

  console.log('Worker result:', result);
}
