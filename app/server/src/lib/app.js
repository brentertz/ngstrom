'use strict';

var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var errorHandler = require('./error-handler');
var config = require('config');
var routes = require('../routes/index');
var services = require('../services/index');

app.set('port', config.port);
app.set('env', config.env);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '../views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride());
//app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(config.get('paths.client.build.root')));

if (app.get('env') === 'development') {
  app.use(logger('dev'));
} else {
  app.use(logger());
}

services(app, config);
routes(app);

app.use(errorHandler()); // Must appear after routes

module.exports = app;
