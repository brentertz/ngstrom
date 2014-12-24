'use strict';

var helpers = require('../test-helper');
var expect = helpers.expect;
var request = helpers.request;

describe('api/articles', function() {
  describe('index', function() {
    beforeEach(function(done) {
      var self = this;
      request(this.server)
        .get('/api/articles')
        .end(function(err, res) {
          self.res = res;
          done(err);
        });
    });

    it('returns json', function() {
      expect(this.res.type).to.equal('application/json');
    });

    it('returns a 200 HTTP status code', function() {
      expect(this.res.status).to.equal(200);
    });
  });

  describe('create', function() {
    beforeEach(function(done) {
      var self = this;
      request(this.server)
        .post('/api/articles')
        .send({
          title: 'Awesome Article',
          content: 'Lorem ipsum dolor sit amet'
        })
        .end(function(err, res) {
          self.res = res;
          done(err);
        });
    });

    it('returns json', function() {
      expect(this.res.type).to.equal('application/json');
    });

    it('returns a 201 HTTP status code', function() {
      expect(this.res.status).to.equal(201);
    });

    it('returns the newly created article', function() {
      expect(this.res.body).to.have.deep.property('title', 'Awesome Article');
    });
  });
});
