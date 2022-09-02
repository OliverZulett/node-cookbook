const fs = require('fs');

const file = process.argv[2];

fs.access(file, (accessStatus) => console.log(accessStatus));

function printMetadata(file) {
  try {  
    const fileState = fs.statSync(file);
    console.log(fileState);
  } catch (error) {
    console.error('Error reading file path', file);
  }
}

printMetadata(file);
