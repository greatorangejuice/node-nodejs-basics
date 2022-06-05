import fs from 'fs';
import zlib from 'zlib';
import path, {dirname} from 'path';
import {fileURLToPath} from "url";

const getDirname = () => {
    const __filename = fileURLToPath(import.meta.url)
    return dirname(__filename);
}

export const compress = async () => {
    const __dirname = getDirname();
    const dest = path.join(__dirname, 'files', 'fileToCompress.txt')
    const readStream = fs.createReadStream(dest);
    readStream
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz')))
        .on('finish', () => {
            console.log('Finished')
        })
};
compress();
