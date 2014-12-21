'use strict';

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  database: {
    uri: 'mongodb://localhost:27017/ngstrom-' + (process.env.NODE_ENV || 'development'),
    debug: true
  },
  paths: {
    client: {
      src: {
        assets: ['./app/client/src/assets/**/*', '!./app/client/src/assets/images/**/*'],
        images: './app/client/src/assets/images/**/*',
        index: './app/client/src/index.html',
        root: './app/client/src',
        scripts: './app/client/src/**/*.js',
        styles: {
          main: './app/client/src/styles/app.less',
          glob: './app/client/src/**/*.less'
        }
      },
      build: {
        assets: './app/client/build/assets',
        images: './app/client/build/assets/images',
        index: './app/client/build',
        root: './app/client/build',
        scripts: './app/client/build',
        styles: './app/client/build'
      },
      test: './app/client/test/**/*-test.js'
    },
    server: {
      test: './app/server/test/**/*-test.js'
    }
  }
};
