'use strict';

var chai = require('chai');
var supertest = require('supertest');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

beforeEach(function() {
  this.stubs = {};
  this.sinon = sinon.sandbox.create();
});

afterEach(function() {
  this.sinon.restore();
});

module.exports = {
  expect: chai.expect,
  request: supertest,
  sinon: sinon
};
