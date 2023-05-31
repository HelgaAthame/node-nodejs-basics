const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
  /*const result = {};
  for (let i=0; i<chunk.length; i +=2) {
    result[chunk[i].slice(2)] = chunk[i+1];
  }
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) process.exit(0);
    process.stdout.write(`Received from master process: ${chunk.toString()}\n`);
    process.send(result);*/
    const stringified = chunk.toString();
    if (stringified.includes('CLOSE')) process.exit(0);
    process.stdout.write(`Received from master process: ${chunk.toString()}\n`)
};

process.stdin.on("data",  echoInput);
