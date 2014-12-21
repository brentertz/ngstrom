'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = function(config) {
  return gulp.task('develop', function() {
    nodemon({
      script: config.get('paths.server.src.scripts.main'),
      ext: 'html js'
    })
    .on('change', ['lint', 'test']);
  });
};
