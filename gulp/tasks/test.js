'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

module.exports = gulp.task('test', function() {
  return gulp.src('src/server/test/**/*-test.js', { read: false })
    .pipe(mocha({ reporter: 'nyan' }));
});
