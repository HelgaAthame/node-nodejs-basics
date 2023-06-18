import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
const { stdin, stdout } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(filePath, args, { silent: true });
  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);
};

const arg1 = 12345;
const arg2 = 'some argument';
const arg3 = true;

// Put your arguments in function call to test this functionality
spawnChildProcess([arg1, arg2, arg3]);
