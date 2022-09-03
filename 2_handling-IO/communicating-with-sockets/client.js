const net = require('net');

const HOST_NAME = 'localhost';
const PORT = 3000;

const socket = net.connect(PORT, HOST_NAME);

socket.write('world');

socket.on('data', data => {
  console.log(data.toString());
});

