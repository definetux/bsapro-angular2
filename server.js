var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var path = require('path');
var fs = require('fs');

var todos = [{title: 'Hello', done: false}];

app.use(express.static(__dirname + '/dist'));

var config = require('./webpack.config.js');

var compiler = webpack(config);
var middleware = webpackMiddleware(compiler, {
  publicPath: '/'
});

app.use(middleware);

app.use(express.static(__dirname + '/src'));

app.get('/', function response(req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
 });

app.get('/api/todos', function(req, res) {
  fs.readFile('todos.json', 'utf8', function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get('/api/todo/:id', function(req, res) {
  fs.readFile('todos.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    for(var i = 0; i < obj.length; i++) {
      if (obj[i].id === req.params.id) {
        res.send(obj[i]);
        break;
      }
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});