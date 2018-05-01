const express = require('express');
const morgan = require('morgan');

const logger = morgan('dev');

express()
  .use(logger)
  .get('/', (req, res) => res.send('hello world!'))
  .listen(3000, () => {
    console.log('server starts listening on port 3000...');
  });
