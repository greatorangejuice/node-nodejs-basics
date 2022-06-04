import fs from 'fs';
import zlib from 'zlib';

export const decompress = async () => {
    const path = 'files/archive.gz';
    const readStream = fs.createReadStream(path);
    readStream
        .pipe(zlib.createUnzip())
        .pipe(fs.createWriteStream(`files/fileToCompress.txt`))
        .on('finish', () => {
            console.log('Finished')
        })

};
decompress()
