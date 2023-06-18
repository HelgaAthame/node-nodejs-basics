import * as os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const cores = os.cpus().length;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let workerArr = [];
let resArr = [];

const performCalculations = async () => {

  for (let i = 0; i < cores; i += 1) {
    workerArr.push(new Worker(path.join(__dirname, 'worker.js'), {
      workerData: i + 10
    }));
    workerArr[i].postMessage(i + 10);
    workerArr[i].on('message', (message) => {
      resArr.push({status: 'resolved', data: message});
      workerArr[i] = {status: 'resolved', data: message};
    });
    workerArr[i].on('error', () => {
      resArr.push({status: 'error', data: null});
      workerArr[i] = {status: 'error', data: null};
    });
    workerArr[i].on("exit", () => {
      if (resArr.length === cores) {
        console.log(workerArr);
        process.exit();
      }
   });
  }
};

await performCalculations();
