'use strict';

var fs = require('fs');
var path = require('path');
var tasks = fs.readdirSync('./tasks');

tasks.forEach(function(task) {
  require(path.join(__dirname, 'tasks', task));
});
