import {fileURLToPath} from "url";
import {dirname} from "path";
import fs from 'fs';

const getDirname = () => {
    const __filename = fileURLToPath(import.meta.url)
    return dirname(__filename);
}
export const write = async () => {
    const path = `${getDirname()}/files/fileToWrite.txt`
    const writeStream = fs.createWriteStream(path);
    writeStream.write(JSON.stringify(process.stdin), 'utf8')

};
write()
