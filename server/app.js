'use strict';

var http = require('http');
var express = require('express');
var app = module.exports = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var errorHandler = require('./lib/error-handler');
var config = require('config');
var routes = require('./routes/index');
var services = require('./services/index');

app.set('port', config.port);
app.set('env', config.env);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser());
app.use(cookieParser());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

if (app.get('env') === 'development') {
  app.use(logger('dev'));
} else {
  app.use(logger());
}

services(app, config);
routes(app, config);

app.use(errorHandler()); // Must appear after routes

if (!module.parent) {
  var port = app.get('port');
  http.createServer(app).listen(port, function() {
    console.log('Server listening on port ' + port);
  });
}
