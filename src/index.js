const express = require('express');
const morgan = require('morgan');
const { sum, multiple } = require('./math');

const logger = morgan('dev');

const PORT = process.env.PORT;

express()
  .use(logger)
  .get('/', (req, res) => {
    const result = `
      1 + 1 = ${sum(1, 1)},
      2 * 3 = ${multiple(2, 3)}
    `;
    res.send(result);
  })
  .listen(PORT, () => {
    console.log(`server starts listening on port ${PORT}`);
  });
