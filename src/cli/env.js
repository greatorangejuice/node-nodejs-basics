export const parseEnv = () => {
    for (let arg in process.env) {
        if (/rss|RSS/.test(arg)) {
            console.log(`${arg}=${process.env[arg]}`)
        }
    }
};
