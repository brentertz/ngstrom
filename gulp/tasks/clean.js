'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('config');

module.exports = gulp.task('clean', function(callback) {
  rimraf(config.get('paths.client.build.root'), callback);
});
