import fs from 'fs';
import {invokeError,getDirname} from "./utils.js";

export const copy = async () => {
    const __dirname = getDirname();
    const src = `${__dirname}/files`;
    const dest = `${__dirname}/copy_files`;

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
