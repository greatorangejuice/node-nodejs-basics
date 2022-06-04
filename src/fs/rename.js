import fs from 'fs';
import {invokeError, getDirname} from "./utils.js";

export const rename = async () => {
    try {
        const __dirname = getDirname();
        const oldPath = `${__dirname}/files/wrongfilename.txt`;
        const newPath = `${__dirname}/files/properFilename.md`;
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
rename()
