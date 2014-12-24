'use strict';

var _ = require('lodash');
var Article = require('../../models/article')();
var Boom = require('boom');

module.exports = function() {
  var ArticlesController = {
    index: function(req, res, next) {
      Article.find(function(err, articles) {
        if (err) { return next(err); }
        res.status(200).json(articles);
      });
    },

    show: function(req, res, next) {
      Article.findById(req.params.id, function(err, article) {
        if (err) { return next(err); }
        if (!article) { return next(Boom.notFound('Article not found')); }
        res.status(200).json(article);
      });
    },

    create: function(req, res, next) {
      var article = new Article(req.body);
      article.save(function(err, article) {
        if (err) { return next(err); }
        res.status(201).json(article);
      });
    },

    update: function(req, res, next) {
      Article.findById(req.params.id, function(err, article) {
        if (err) { return next(err); }
        _.extend(article, req.body);
        article.save(function(err) {
          if (err) { return next(err); }
          res.status(200).json(article);
        });
      });
    },

    destroy: function(req, res, next) {
      Article.findByIdAndRemove(req.params.id, function(err) {
        if (err) { return next(err); }
        res.send(204);
      });
    }
  };

  return ArticlesController;
};
