export const parseArgs = () => {
    for (let j = 0; j < process.argv.length; j++) {
        if (/--/.test(process.argv[j])) {
            console.log(`${(process.argv[j])} is ${(process.argv[j+1])}`)
        }
    }
};
parseArgs()
