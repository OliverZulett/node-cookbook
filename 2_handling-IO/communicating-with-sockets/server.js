const net = require('net');

const HOST_NAME = 'localhost';
const PORT = 3000;

net
  .createServer(socket => {
    console.log('Client connected');

    socket.on('data', name => {
      socket.write(`Hello ${name}!`);
    })
  })
  .listen(PORT, HOST_NAME);

