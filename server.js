const express = require('express');
const { log } = require('console');
const { join } = require('path');

const server = express();

server.use(express.static(join(__dirname, 'build')));

server.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

server.listen(3000, () => log('http://localhost:3000'));
