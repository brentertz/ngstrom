'use strict';

var SiteController = require('../controllers/site-controller')();

module.exports = function(app, config) {
  app.get('/', SiteController.index);
};
