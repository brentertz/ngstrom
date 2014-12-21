'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports = function(config) {
  return gulp.task('lint', function() {
    return gulp.src(['**/*.js', '!node_modules/**/*'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failOnError());
  });
};
