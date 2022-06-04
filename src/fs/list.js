import fs from 'fs';
import {invokeError} from "./utils.js";

export const list = async () => {
    const path = 'files'

    if (!fs.existsSync(path)) {
        invokeError('FS operation failed')
    }
    fs.readdir(path, (err, files) => {
        if (err) {
            invokeError('FS operation failed')
        }
        console.log(files)
    });
};
