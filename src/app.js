const express = require('express');
const strings = require('./lib/strings');
const numbers = require('./lib/numbers');

const app = express();

app.use(express.json());

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
    res.send({result: numbers.add(Number(req.params.number1), Number(req.params.number2))});
    res.sendStatus(200);
  } else {
    res.status(400).send({error: 'Parameters must be valid numbers.'});
  }
})

app.get('/numbers/subtract/:number1/from/:number2', function (req, res) {
  const number1 = parseInt(req.params.number1);
  const number2 = parseInt(req.params.number2);
  if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
    res.send({result: numbers.subtract(req.params.number1, req.params.number2)});
    res.sendStatus(200);
  } else {
    res.status(400).send({error: 'Parameters must be valid numbers.'});
  }
})

app.post('/numbers/multiply', function (req, res) {
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(req.body.a) || isNaN(req.body.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.multiply(req.body.a, req.body.b) });
  }
});

app.post('/numbers/divide', function (req, res) {
  if(req.body.b === 0) {
    res.status(400).json({error: 'Unable to divide by 0.'});
  } else if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({error: 'Parameters "a" and "b" are required.'});
  } else if (isNaN(req.body.a) || isNaN(req.body.b)) {
    res.status(400).json({error: 'Parameters "a" and "b" must be valid numbers.'});
  } else {
    res.status(200).json({result: numbers.divide(req.body.a, req.body.b)});
  }
});

module.exports = app;
