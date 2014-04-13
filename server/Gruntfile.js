'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.config('env', {
    test: {
      NODE_ENV: 'test'
    }
  });

  grunt.config('jshint', {
    options: {
      jshintrc: true
    },
    all: ['**/*.js', '!node_modules/**']
  });

  grunt.config('mochaTest', {
    test: {
      options: {
        reporter: 'spec'
      },
      src: ['test/**/*-test.js']
    }
  });

  grunt.config('watch', {
    jshint: {
      files: ['**/*.js', '!node_modules/**'],
      tasks: ['jshint']
    },
    test: {
      files: ['test/**/*.js'],
      tasks: ['env:test', 'test']
    }
  });

  grunt.loadTasks('./tasks');

  grunt.registerTask('test', ['env:test', 'mochaTest']);

  grunt.registerTask('default', ['jshint', 'test']);
};
