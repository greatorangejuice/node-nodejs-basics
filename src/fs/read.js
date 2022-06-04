import fs from 'fs';
import {invokeError} from "./utils.js";

export const read = async () => {
    try {
        const path = 'files/fileToRead.txt'
        if (!fs.existsSync(path)) {
            invokeError('FS operation failed')
        }
        fs.readFile(path, 'utf8',(err, data) => {
            if (err) {
                invokeError('FS operation failed')
            }
            console.log(data)
        })
    } catch (e) {
        console.log(e)
    }
};
