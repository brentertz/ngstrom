'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = gulp.task('develop', function() {
  nodemon({
    script: './app/server/src/app.js',
    ext: 'html js'
  })
  .on('change', ['lint', 'test']);
});
