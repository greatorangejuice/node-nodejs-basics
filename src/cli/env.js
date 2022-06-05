export const parseEnv = () => {
    process.env['RSS_KEY'] = '123';
    process.env['other_KEY'] = 'NO-RSS-key';
    for (let arg in process.env) {
        if (/rss|RSS/.test(arg)) {
            console.log(`${arg}=${process.env[arg]}`)
        }
    }
};
parseEnv()
