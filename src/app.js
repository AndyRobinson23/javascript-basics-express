const express = require('express');
const strings = require('./lib/strings');
const numbers = require('./lib/numbers');

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

app.get('/strings/first-character/:string', function (req, res) {
  res.send({result: strings.firstCharacter(req.params.string)});
  res.sendStatus(200);
})

app.get('/strings/first-characters/:string', function (req, res) {
  res.send({result: strings.firstCharacters(req.params.string, 4)});
  res.sendStatus(200);
})

app.get('/numbers/add/:number1/and/:number2', function (req, res) {
  const number1 = parseInt(req.params.number1);
  const number2 = parseInt(req.params.number2);
  if(!Number.isNaN(number1) && !Number.isNaN(number2)) {
    console.log('if statement');
    res.send({result: numbers.add(Number(req.params.number1), Number(req.params.number2))});
    res.sendStatus(200);
  } else {
    res.status(400).send({error: 'Parameters must be valid numbers.'});
  }
})

module.exports = app;
