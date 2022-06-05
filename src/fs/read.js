import fs from 'fs';
import {getDirname, invokeError} from "./utils.js";
import path from 'path';

export const read = async () => {
    try {
        const __dirname = getDirname();
        const dest = path.join(__dirname, 'files', 'fileToRead.txt');

        if (!fs.existsSync(dest)) {
            invokeError('FS operation failed')
        }
        fs.readFile(dest, 'utf8',(err, data) => {
            if (err) {
                invokeError('FS operation failed')
            }
            console.log(data)
        })
    } catch (e) {
        console.log(e)
    }
};
read()
