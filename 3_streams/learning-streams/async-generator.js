const { Readable } = require('stream');

async function* generate() {
  yield 'Nodejs';
  yield 'is';
  yield 'a';
  yield 'javascript';
  yield 'runtime';
}

const readable = Readable.from(generate());

readable.on('data', chunk => {
  console.log('generator content: ', chunk)
})
