const express = require('express');
const strings = require('./lib/strings');
const numbers = require('./lib/numbers');
const booleans = require('./lib/booleans');
const arrays = require('./lib/arrays');

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

app.post('/numbers/remainder', function (req, res) {
  if(req.body.b === 0) {
    res.status(400).json({error: 'Unable to divide by 0.'});
  } else if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({error: 'Parameters "a" and "b" are required.'});
  } else if (isNaN(req.body.a) || isNaN(req.body.b)) {
    res.status(400).json({error: 'Parameters must be valid numbers.'});
  } else {
    res.status(200).json({result: numbers.remainder(req.body.a, req.body.b) })
  }
});

app.post('/booleans/negate', function(req, res) {
  res.status(200).json({result: booleans.negate(req.body.value)})
})

app.post('/booleans/truthiness', function (req, res) {
  res.status(200).json({result: booleans.truthiness(req.body.value)});
})

app.get('/booleans/is-odd/:number', function (req, res) {
  if(isNaN(req.params.number)) {
    res.status(400).json({error: 'Parameter must be a number.'})
  } else {
    res.status(200).json({result: booleans.isOdd(req.params.number)});
  }
})

app.get('/booleans/:string/starts-with/:character', function (req, res) {
  if (req.params.character.length > 1) {
    res.status(400).json({error: 'Parameter "character" must be a single character.'})
  } else {
    res.status(200).json({result: booleans.startsWith(req.params.character, req.params.string) });
  }
})

app.post('/arrays/element-at-index/:index', function (req, res) {
  res.status(200).json({result: arrays.getNthElement(req.params.index, req.body.array)});
});

app.post('/arrays/to-string', function(req, res) {
  res.status(200).json({result: arrays.arrayToCSVString(req.body.array)});
});

app.post('/arrays/append', function(req, res) {
  res.status(200).json({result: arrays.addToArray2(req.body.value, req.body.array)});
})

app.post('/arrays/starts-with-vowel', function(req, res) {
  res.status(200).json({result: arrays.elementsStartingWithAVowel(req.body.array)});
})

app.post('/arrays/remove-element', function(req, res) {
  if(req.query) {
    res.status(200).json({result: arrays.removeNthElement2(req.query.index, req.body.array)});
  } else {
    res.status(200).json({result: arrays.removeNthElement2(0, req.body.array)});
  }
})

module.exports = app;
