const express = require('express');
const { join } = require('path');
const { log, error } = require('console');

const server = express();

server.use(express.static(join(__dirname, 'build')));

server.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

server.listen(3000, () => log('http://localhost:3000'));

server.on('error', (err) => error(err));
