'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var config = require('config');

module.exports = gulp.task('lint', function() {
  return gulp.src(config.get('paths.client.src.scripts'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
