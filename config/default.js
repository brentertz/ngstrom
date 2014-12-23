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
        scripts: {
          glob: './app/client/src/**/*.js',
          main: './app/client/src/index.js'
        },
        styles: {
          glob: './app/client/src/**/*.less',
          main: './app/client/src/styles/app.less'
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
    config: {
      root: './config'
    },
    server: {
      src: {
        root: './app/server/src',
        scripts: {
          main: './app/server/src/app.js'
        }
      },
      test: './app/server/test/**/*-test.js'
    }
  }
};
