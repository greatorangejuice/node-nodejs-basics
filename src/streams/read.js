import fs from 'fs'
import readline from 'readline'
import {fileURLToPath} from "url";
import path, {dirname} from "path";

const getDirname = () => {
    const __filename = fileURLToPath(import.meta.url)
    return dirname(__filename);
}

export const read = async () => {
    const __dirname = getDirname();
    const dest = path.join(__dirname, 'files', 'fileToRead.txt');
    const readStream = fs.createReadStream(dest);
    const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity
    });
    for await (const line of rl) {
        process.stdout.write(line)
        console.log(process.stdout)
    }
};
read()
