import {createHmac} from 'crypto'
import fs from 'fs';
import {fileURLToPath} from "url";
import {dirname} from "path";

const getDirname = () => {
    const __filename = fileURLToPath(import.meta.url)
    return dirname(__filename);
}
export const calculateHash = async () => {
    const __dirname = getDirname();
    const path = `${__dirname}/files/fileToCalculateHashFor.txt`
    const secret = fs.readFileSync(path, 'utf8')
    const hash = createHmac('sha256', secret)
        .digest('hex');
    console.log(hash)
};
calculateHash()
