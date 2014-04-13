'use strict';

module.exports = function(app, config) {
  require('./site')(app, config);
  require('./api')(app, config);
};
