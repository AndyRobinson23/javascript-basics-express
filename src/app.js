const express = require('express');
const strings = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', function (req, res) {
  res.send({ result: strings.sayHello(req.params.string)});
  res.sendStatus(200);
})

app.get('/strings/upper/:string', function (req, res) {
  res.send({ result: strings.uppercase(req.params.string)});
  res.sendStatus(200);
})

app.get('/strings/lower/:string', function (req, res) {
  res.send({result: strings.lowercase(req.params.string)});
  res.sendStatus(200);
})

app.get('/strings/first-characters/:string', function (req, res) {
  res.send({result: strings.firstCharacter(req.params.string)});
  res.sendStatus(200);
})

app.get('/strings/first-characters/:string', function (req, res) {
  res.send({result: strings.firstCharacters(req.params.string, req.query.length)});
  res.sendStatus(200);
})

module.exports = app;
