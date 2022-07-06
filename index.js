'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;

app.get('/', (req, res, next) => {
  res.status(200).send('Looking good.');
});

app.get('/hello', (req, res, next) => {
  let { name } = req.query;
  res.status(200).send(`Hello ${name}!`);
});

app.get('/hello/:name', (req, res, next) => {
  let { name } = req.params;
  res.status(200).send(`Hello ${name}!`);
});

app.listen(PORT, () => console.log('Listening on port:', PORT));