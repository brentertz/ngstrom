var express = require('express');

var helpers = require('../../test-helper');
var expect = helpers.expect;
var request = helpers.request;
var sinon = helpers.sinon;

var User = require('../../../../models/user')();
var UsersController = require('../../../../controllers/api/users-controller')();

describe('UsersController', function() {
  context('create', function() {
    beforeEach(function(done) {
      var self = this;

      // FIXME - how to stub save?
      this.stubs.save = this.sinon.stub(User.prototype, 'save').callsArgWith(1, null, [
        new User({
          firstName: 'Brent',
          lastName: 'Ertz',
          userName: 'brent.ertz',
          email: 'brent.ertz@gmail.com'
        })
      ]);

      var app = express();
      app.use(require('body-parser')());
      app.use(UsersController.create);

      request(app)
        .post('/')
        .send({
          firstName: 'Brent',
          lastName: 'Ertz',
          userName: 'brent.ertz',
          email: 'brent.ertz@gmail.com'
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

    it('creates a user', function() {
      var params = {
        firstName: 'Brent',
        lastName: 'Ertz',
        userName: 'brent.ertz',
        email: 'brent.ertz@gmail.com'
      };
      expect(this.stubs.save).to.have.been.calledWith(params, sinon.match.func);
    });

    it('returns the newly created user', function() {
      expect(this.res.body).to.have.deep.property('email', 'brent.ertz@gmail.com');
    });
  });
});
