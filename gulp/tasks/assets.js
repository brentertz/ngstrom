'use strict';

var gulp = require('gulp');
var config = require('config');

module.exports = gulp.task('assets', function() {
  return gulp.src(config.get('paths.client.src.assets'))
    .pipe(gulp.dest(config.get('paths.client.build.assets')));
});
