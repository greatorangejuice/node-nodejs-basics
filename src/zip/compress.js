import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

export const compress = async () => {
    const dest = path.join(path.resolve(), 'files', 'fileToCompress.txt')
    const readStream = fs.createReadStream(dest);
    readStream
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(`files/archive.gz`))
        .on('finish', () => {
            console.log('Finished')
        })
};
compress();
