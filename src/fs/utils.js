import {fileURLToPath} from "url";
import {dirname} from "path";

export const invokeError = (error) => {
    throw new Error(error)
};

export const getDirname = () => {
    const __filename = fileURLToPath(import.meta.url)
    return dirname(__filename);
}
