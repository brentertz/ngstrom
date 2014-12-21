'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('config');

module.exports = gulp.task('watch', function() {
  watch(config.get('paths.client.src.scripts'), function() {
    gulp.start('lint'); // NOTE: watchify will handle script updates
  });

  watch(config.get('paths.client.src.index'), function() {
    gulp.start('index');
  });

  watch(config.get('paths.client.src.styles.glob'), function() {
    gulp.start('styles');
  });
});
