import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
path.dirname('./files/c');
import * as ajson from './files/a.json' assert { type: "json" };
import * as bjson from './files/b.json' assert { type: "json" };
import { fileURLToPath } from 'url';
//const path = require('path');
//const { release, version } = require('os');
//const { createServer: createServerHttp } = require('http');
//require('./files/c');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = ajson;
  console.log(unknownObject);
  //unknownObject = require('./files/a.json');
} else {
  unknownObject = bjson;
  console.log(unknownObject);
  //unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
/*module.exports = {
  unknownObject,
  createMyServer,
};*/