const express = require('express');
const morgan = require('morgan');
const { sum } = require('./math');

const logger = morgan('dev');

const PORT = process.env.PORT;

express()
  .use(logger)
  .get('/', (req, res) => {
    res.send(`1 + 1 = ${sum(1, 1)}`);
  })
  .listen(PORT, () => {
    console.log(`server starts listening on port ${PORT}`);
  });
