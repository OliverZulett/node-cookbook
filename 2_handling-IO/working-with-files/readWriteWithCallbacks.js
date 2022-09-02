const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'hello.txt');

fs.readFile(filePath, 'utf8', (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log('File contents:', contents);
  const upperContents = contents.toUpperCase();
  setTimeout(() => updateFile(filePath, upperContents), 10);
});

function updateFile(filePath, contents) {
  fs.writeFile(filePath, contents, err => {
    if (err) throw err;
    console.log('File updated.');
  });
}

setInterval(() => process.stdout.write('**** \n'), 1).unref();


