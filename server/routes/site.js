'use strict';

var SiteController = require('../controllers/site-controller')();

module.exports = function(app) {
  app.get('/', SiteController.index);
};
