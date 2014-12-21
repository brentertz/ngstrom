'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var config = require('config');

module.exports = gulp.task('test', function() {
  return gulp.src(config.get('paths.server.test'), { read: false })
    .pipe(mocha({ reporter: 'nyan' }));
});
