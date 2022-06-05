import fs from 'fs';
import {getDirname, invokeError} from "./utils.js";
import path from 'path';

export const list = async () => {
    const __dirname = getDirname();
    const dest = path.join(__dirname, 'files');


    if (!fs.existsSync(dest)) {
        invokeError('FS operation failed')
    }
    fs.readdir(dest, (err, files) => {
        if (err) {
            invokeError('FS operation failed')
        }
        console.log(files)
    });
};
list()
