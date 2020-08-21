// Library bloat ;)

const _ = require('lodash');
const express = require('express');
const axios = require('axios');
const react = require('react');
const reactdom = require('react-dom');
const underscore = require('underscore');
const moment = require('moment');
const commander = require('commander');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello World! ${moment()}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});