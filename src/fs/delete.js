import fs from 'fs';
import {getDirname, invokeError} from "./utils.js";

export const remove = async () => {
    try {
        const __dirname = getDirname();
        const path = `${__dirname}/files/fileToRemove.txt`

        if (!fs.existsSync(path)) {
            invokeError('FS operation failed')
        }
        fs.unlink(path, (err) => {
            if (err) {
                invokeError('FS operation failed')
            }
        })
    } catch (e) {
        console.log(e)
    }
};
remove()
