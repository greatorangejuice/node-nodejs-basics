import {fileURLToPath} from "url";
import path, {dirname} from "path";
import fs from 'fs';

const getDirname = () => {
    const __filename = fileURLToPath(import.meta.url)
    return dirname(__filename);
}
export const write = async () => {
    const dest = path.join(getDirname(), 'files', 'fileToWrite');
    const writeStream = fs.createWriteStream(dest);
    writeStream.write(JSON.stringify(process.stdin), 'utf8')

};
write()
