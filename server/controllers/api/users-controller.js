'use strict';

var _ = require('lodash');
var User = require('../../models/user')();
var Boom = require('boom');

module.exports = function() {
  var UsersController = {
    index: function(req, res, next) {
      User.find(function(err, users) {
        if (err) { return next(err); }
        res.json(200, users);
      });
    },

    show: function(req, res, next) {
      User.findById(req.params.id, function(err, user) {
        if (err) { return next(err); }
        if (!user) { return next(Boom.notFound('User not found')); }
        res.json(200, user);
      });
    },

    create: function(req, res, next) {
      var user = new User(req.body);
      user.save(function(err, user) {
        if (err) { return next(err); }
        res.json(201, user);
      });
    },

    update: function(req, res, next) {
      User.findById(req.params.id, function(err, user) {
        if (err) { return next(err); }
        _.extend(user, req.body);
        user.save(function(err) {
          if (err) { return next(err); }
          res.json(200, user);
        });
      });
    },

    destroy: function(req, res, next) {
      User.findByIdAndRemove(req.params.id, function(err) {
        if (err) { return next(err); }
        res.send(204);
      });
    }
  };

  return UsersController;
};
