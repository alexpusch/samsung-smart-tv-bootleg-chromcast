const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let command = '';

app.use(bodyParser.json());

app.get('/command', function (req, res) {
  console.log('GET command')
  res.json({command});
});

app.post('/command', function (req, res) {
  command = req.body.command;
  console.log('got body', req.body)
  res.status(200).send();
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
