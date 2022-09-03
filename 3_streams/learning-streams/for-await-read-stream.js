const fs = require('fs');

const rs = fs.createReadStream('./file.txt');

async function run() {
  for await (const chunk of rs) {
    console.log('Read Chunk: ', chunk);
  }
  console.log('no more data');
}

run();

