const fs = require('fs');

const rs = fs.createReadStream('./file.txt');

rs.on('data', data => {
  console.log('Read Chunk: ', data);
  console.log('Chunk in string: ', data.toString());
});

rs.on('end', () => {
  console.log('no more data');
});

