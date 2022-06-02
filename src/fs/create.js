import fs from 'fs';
export const create = async () => {

    if (fs.existsSync('files/fresh.txt')) {
       throw new Error('test')
    }
    fs.appendFile('files/fresh.txt', 'I am fresh and young', (err) => {
        if (err) {
            console.log('Error', err)
        }
    });
};

create();
