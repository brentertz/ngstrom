'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('build', function(callback) {
  runSequence(
    ['clean', 'lint'],
    ['browserify', 'styles', 'assets', 'images', 'index'],
    callback
  );
});
