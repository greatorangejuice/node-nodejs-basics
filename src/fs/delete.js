import fs from 'fs';
import {getDirname, invokeError} from "./utils.js";
import path from 'path';

export const remove = async () => {
    try {
        const __dirname = getDirname();
        const dest = path.join(__dirname, 'files', 'fileToRemove.txt');

        if (!fs.existsSync(dest)) {
            invokeError('FS operation failed')
        }
        fs.unlink(dest, (err) => {
            if (err) {
                invokeError('FS operation failed')
            }
        })
    } catch (e) {
        console.log(e)
    }
};
remove()
