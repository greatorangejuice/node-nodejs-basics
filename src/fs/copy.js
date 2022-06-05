import fs from 'fs';
import {invokeError,getDirname} from "./utils.js";
import path from 'path';

export const copy = async () => {
    const __dirname = getDirname();
    const src = path.join(__dirname, 'files');
    const dest = path.join(__dirname, 'copy_files');

    try {
        if (fs.existsSync(dest)) {
            invokeError('FS operation failed')
        }
        fs.cpSync(src, dest, {recursive: true, errorOnExist: true})
    } catch (e) {
        console.log(e)
    }
};
copy()
