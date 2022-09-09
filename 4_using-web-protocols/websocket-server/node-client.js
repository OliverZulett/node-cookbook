const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3000');

ws.on('open', () => {
  console.log('connected');
});

ws.on('close', () => {
  console.log('disconnected');
});

ws.on('message', message => {
  console.log('Received', message);
});

setInterval(() => {
  ws.send('Hello');
}, 3000);

