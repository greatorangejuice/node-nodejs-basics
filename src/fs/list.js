import fs from 'fs';
import {getDirname, invokeError} from "./utils.js";

export const list = async () => {
    const __dirname = getDirname();
    const path = `${__dirname}/files`

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
list()
