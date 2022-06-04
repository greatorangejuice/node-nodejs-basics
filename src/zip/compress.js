import fs from 'fs';
import zlib from 'zlib';

export const compress = async () => {
    const path = 'files/fileToCompress.txt';
    const readStream = fs.createReadStream(path);
    readStream
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(`files/archive.gz`))
        .on('finish', () => {
            console.log('Finished')
        })
};
compress();
