import * as fs from 'fs';
import { stat } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import * as stream from 'stream';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const { stdin } = process;

  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

  const errMessage = 'FS operation failed';

  try {
    const isItFile = await stat(filePath, err => {
      if (err) {
        throw new Error(errMessage);
      }
    })
    .then(file => file.isFile());

    if (!isItFile) {
      throw new Error(errMessage);
    }

    console.log('Write your data \n');

    const writeStream = fs.createWriteStream(filePath);

    stdin.pipe(writeStream).on('error', () => {
      throw new Error(errMessage);
    });

  } catch (error) {
    throw new Error(errMessage);
  }
};

await write();
