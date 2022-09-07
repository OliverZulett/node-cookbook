const http = require('http');

const payload = `{
  "name": "Beth",
  "job": "Software Engineer"
}`;

const opts = {
  method: "POST",
  hostname: "postman-eho.com",
  path: "/post",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(payload),
  },
};

//http.get('http://example.com', res => res.pipe(process.stdout));

const req = http.request(opts, res => {
  process.stdout.write('Status Code: '+res.statusCode+"\n");
  process.stdout.write('Body: ');
  res.pipe(process.stdout);
});

req.on('error', err => console.error('Error: ', err));

req.end(payload);

