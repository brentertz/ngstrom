'use strict';

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  database: {
    uri: 'mongodb://localhost:27017/ngstrom-' + (process.env.NODE_ENV || 'development'),
    debug: true
  }
};
