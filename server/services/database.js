'use strict';

var mongoose = require('mongoose');

module.exports = function(config) {
  if (!mongoose.connection || mongoose.connection.readyState === 0) {
    mongoose.connect(config.database.uri);
  }
  mongoose.set('debug', config.database.debug);

  var database = mongoose.connection;
  database.on('error', console.error.bind(console, 'Database connection error:'));
  database.once('open', function callback() {
    console.log('Database connection open');
  });

  return database;
};
