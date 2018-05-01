const express = require('express');

express().get('/', (req, res) => res.send('hello world!'))
  .listen(3000, () => {
    console.log('server starts listening on port 3000...');
  });
