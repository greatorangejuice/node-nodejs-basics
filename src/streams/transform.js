import {Transform} from 'stream'

const reverseStream = new Transform({transform(chunk, encoding, callback) {
        const stringedChunk = chunk.toString();
        const reversedChunk = stringedChunk.split('').reverse().join('');
        console.log(reversedChunk)
    }})

export const transform = async () => {
    process.stdin.pipe(reverseStream).pipe(process.stdout);
};
await transform()
