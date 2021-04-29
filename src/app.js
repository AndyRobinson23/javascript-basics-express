const express = require('express');

const app = express();

app.get('/strings/hello/world', function (req, res) {
  res.send({ result: 'Hello, world!'});
  res.sendStatus(200);
})

app.get('/strings/upper/hello', function (req, res) {
  res.send({ result: 'HELLO'});
  res.sendStatus(200);
})

app.get('/strings/lower/HELLO', function (req, res) {
  res.send({result: 'hello'});
  res.sendStatus(200);
})

app.get('/strings/first-characters/hello', function (req, res) {
  res.send({result: 'h'});
  res.sendStatus(200);
})

module.exports = app;
