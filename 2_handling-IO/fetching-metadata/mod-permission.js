const fs = require('fs');
const file = process.argv[2];

// aqui damos permisos de lectura y escritura al usuario y al grupo
// y permisos de solo lectura a otros

fs.chmodSync(
  file,
  fs.constants.S_IRUSR |
  fs.constants.S_IWUSR |
  fs.constants.S_IRGRP |
  fs.constants.S_IWGRP |
  fs.constants.S_IROTH
)
