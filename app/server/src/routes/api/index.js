'use strict';

module.exports = function(app) {
  require('./articles')(app);
  require('./users')(app);
};
