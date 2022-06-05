import child_process from 'child_process'
import path from 'path';

// export const spawnChildProcess = async (args) => {
//     const child = child_process.fork(path.join(path.resolve(), 'files', 'script.js'), args)
//     console.log(child.pid)
// };

const parseArgs = () => {
    for (let j = 0; j < process.argv.length; j++) {
        if (/--/.test(process.argv[j])) {
            return process.argv[j+1]
        }
    }
};

export const spawnChildProcess = async (args) => {

    const ls = child_process.spawn('node', [path.join(path.resolve(), 'files', 'script.js'), ...args])

    ls.stdin.write(parseArgs());

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
