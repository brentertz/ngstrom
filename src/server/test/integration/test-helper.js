'use strict';

var app = require('../../../server/app');
var chai = require('chai');
var supertest = require('supertest');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var cleanDatabase = function(db, callback) {
  db.collections(function(skip, collections) {
    var count = collections.length;
    if (!count) { return callback(); }

    collections.forEach(function(collection) {
      collection.drop(function() {
        if (--count <= 0) { return callback(); }
      });
    });
  });
};

before(function(done) {
  this.server = app.listen(function(err) {
    done(err);
  });
});

after(function(done) {
  this.server.close();
  app.services.database.db.close();
  done();
});

beforeEach(function() {
  this.stubs = {};
  this.sinon = sinon.sandbox.create();
});

afterEach(function(done) {
  this.sinon.restore();
  cleanDatabase(app.services.database.db, done);
});

module.exports = {
  expect: chai.expect,
  request: supertest,
  sinon: sinon
};
