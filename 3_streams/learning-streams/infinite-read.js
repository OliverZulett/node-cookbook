const fs = require('fs');

const rs = fs.createReadStream('/dev/random');

let size = 0;

rs.on('data', data => {
  size += data.length;
  console.log('File Size: ', size);
});

