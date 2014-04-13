var helpers = require('../test-helper');
var expect = helpers.expect;
var request = helpers.request;

describe('api/users', function() {
  context('index', function() {
    beforeEach(function(done) {
      var self = this;
      request(this.server)
        .get('/api/users')
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

  context('create', function() {
    beforeEach(function(done) {
      var self = this;
      request(this.server)
        .post('/api/users')
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

    it('returns the newly created user', function() {
      expect(this.res.body).to.have.deep.property('email', 'brent.ertz@gmail.com');
    });
  });
});
