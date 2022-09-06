const fs = require('fs');
const { Transform } = require('stream');

const rs = fs.createReadStream('./file.txt');
const newFile = fs.createWriteStream('./newFile2.txt');

class Uppercase extends Transform {
  contructor() {
    super();
  }

  _transform(chunck, encoding, callback) {
    this.push(chunck.toString().toUpperCase());
    callback();
  }
}

rs.pipe(new Uppercase()).pipe(newFile);

