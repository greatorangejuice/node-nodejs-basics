import {Worker} from 'worker_threads';
import os from 'os';
const coreCount = os.cpus().length;
const results = [];

export const performCalculations = async (n) => {
    return new Promise((resolve, reject) => {
        const calcWorker = new Worker('./worker.js', {workerData: n})
        calcWorker.on('message', resolve);
        calcWorker.on('error', reject);
        calcWorker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        })
    })
};

const run = async (n) => {
    return await performCalculations(n).then(
        (data) => {
            results.push({status: 'resolved', data})
        },
        () => {
            results.push({status: 'rejected', data: null})
        }
    )
}

function createRuns() {
    const promiseArray = []
    for (let i = 0; i < coreCount; i++) {
        promiseArray.push(run(i + 10).catch(err => console.error(err)))
    }
    return promiseArray
}

Promise.all(createRuns()).then(() => console.log(results))
