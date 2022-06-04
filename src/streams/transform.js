import fs from 'fs';
import {Transform} from 'stream'

export const transform = async () => {
    const readStream = fs.createReadStream(process.stdin);


};
