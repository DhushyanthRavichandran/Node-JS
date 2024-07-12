// this is rleated to the streamEvent 
const { writeFileSync } = require('fs');

for (let i = 0; i < 1000; i++) {
    writeFileSync('./content/bigData.txt', `hello world ${i}\n`, { flag: 'a' });
}
