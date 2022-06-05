import child_process from 'child_process'
import path, {dirname} from 'path';
import {fileURLToPath} from "url";

const getDirname = () => {
    const __filename = fileURLToPath(import.meta.url)
    return dirname(__filename);
}

const parseArgs = () => {
    for (let j = 0; j < process.argv.length; j++) {
        if (/--/.test(process.argv[j])) {
            return process.argv[j+1]
        }
    }
};

export const spawnChildProcess = async (args) => {
    const __dirname = getDirname();
    const ls = child_process.spawn('node', [path.join(__dirname, 'files', 'script.js'), ...args])
    ls.stdin.write(parseArgs());

    ls.stdout.pipe(process.stdout)
    ls.stdout.on('data', (data) => {
        console.log(`(master) stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
        console.error(`(master) stderr: ${data}`);
    });

    ls.on('close', (code) => {
        console.log(`(master) child process exited with code ${code}`);
    });
};
await spawnChildProcess([1,2,3]);
