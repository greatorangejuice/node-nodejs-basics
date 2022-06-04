import fs from 'fs';
import {getDirname, invokeError} from './utils.js'

export const create = async () => {
    const __dirname = getDirname();
    const dest = `${__dirname}/files/fresh.txt`;
    try {
        if (fs.existsSync(dest)) {
            invokeError('FS operation failed')
        }
        fs.appendFile(dest, 'I am fresh and young', (err) => {
            if (err) {
                invokeError(err)
            }
        });
    } catch (error) {
        console.log(error)
    }
};
create()
