import fs from 'fs';
import zlib from 'zlib';
import {fileURLToPath} from "url";
import path, {dirname} from "path";

const getDirname = () => {
    const __filename = fileURLToPath(import.meta.url)
    return dirname(__filename);
}

export const decompress = async () => {
    const __dirname = getDirname();
    const dest = path.join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(dest);
    readStream
        .pipe(zlib.createUnzip())
        .pipe(fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt')))
        .on('finish', () => {
            console.log('Finished')
        })

};
decompress()
