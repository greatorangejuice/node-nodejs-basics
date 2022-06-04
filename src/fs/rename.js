import fs from 'fs';
import {invokeError} from "./utils.js";

export const rename = async () => {
    try {
        const oldPath = 'files/wrongfilename.txt';
        const newPath = 'files/properFilename.md';
        if (fs.existsSync(newPath)) {
            invokeError('FS operation failed')
        }
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                invokeError('FS operation failed')
            }
        })
    } catch (e) {
        console.log(e)
    }
};
