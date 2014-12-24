'use strict';

module.exports = function(app) {
  var ArticlesController = require('../../controllers/api/articles-controller')();

  app.get('/api/articles', ArticlesController.index);
  app.get('/api/articles/:id', ArticlesController.show);
  app.post('/api/articles', ArticlesController.create);
  app.put('/api/articles/:id', ArticlesController.update);
  app.delete('/api/articles/:id', ArticlesController.destroy);
};
