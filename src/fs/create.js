import fs from 'fs';
import {invokeError} from "./utils";

export const create = async () => {
    try {
        if (fs.existsSync('files/fresh.txt')) {
            invokeError('FS operation failed')
        }
        fs.appendFile('files/fresh.txt', 'I am fresh and young', (err) => {
            if (err) {
                invokeError(err)
            }
        });
    } catch (error) {
        console.log(error)
    }
};
