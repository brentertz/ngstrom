'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = gulp.task('develop', function() {
  nodemon({
    script: 'src/server/app.js',
    ext: 'html js'
  })
  .on('change', ['lint', 'test']);
});
