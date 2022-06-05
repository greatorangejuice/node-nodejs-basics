const args = process.argv.slice(2);

console.log('\x1b[36m%s\x1b[0m', '(child)',`Total number of arguments is ${args.length}`);
console.log('\x1b[36m%s\x1b[0m', '(child)',`Arguments: ${JSON.stringify(args)}`);
const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) process.exit(0);
    process.stdout.write(` (child) Received from master process: ${chunk.toString()}\n`)
};

process.stdin.on('data', echoInput);
