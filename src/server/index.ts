/// <reference path="../../typings/tsd.d.ts" />
import assert = require('assert');
import http = require('http');
import express = require('express');
import path = require('path');

var mod = require('../common/mod.js');
import mod2 = require('../common/mod2.ts');

console.log(mod.uselet() + mod.uselet(), 2);

var app = express();
app.use(express.static(path.join(__dirname, '../client/')));
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var port = process.env.port || 3000;

var server: http.Server = app.listen(port, function() {
  console.log('Running server at http://localhost:' + port);
});
