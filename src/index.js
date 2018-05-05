const express = require('express');
const morgan = require('morgan');
const { sum } = require('./math');

const logger = morgan('dev');

express()
  .use(logger)
  .get('/', (req, res) => {
    res.send(`1 + 1 = ${sum(1, 1)}`);
  })
  .listen(3000, () => {
    console.log('server starts listening on port 3000...');
  });
