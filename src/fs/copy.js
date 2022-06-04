import fs from 'fs';
import {invokeError} from "./utils.js";


export const copy = async () => {
    const src = 'files';
    const dest = 'copy_files';
    try {
        if (fs.existsSync(dest)) {
            invokeError('FS operation failed')
        }
        fs.cpSync(src, dest, {recursive: true, errorOnExist: true})
    } catch (e) {
        console.log(e)
    }
};
