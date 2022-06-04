import path, {dirname} from "path";
import {fileURLToPath} from 'url';
import { release, version } from 'os';
import { createServer } from 'http';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const random = Math.random();

const jsonPath = random > 0.5 ? './files/a.json' : './files/b.json'
let unknownObject = await import(jsonPath, { assert: { type: 'json' } })

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);


const createMyServer = createServer((_, res) => {
    res.end('Request accepted');
});

export default { unknownObject, createMyServer }
