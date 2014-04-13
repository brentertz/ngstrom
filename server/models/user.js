'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var schema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  userName: {
    type: String,
    index: true,
    sparse: true,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  email: {
    type: String,
    index: true,
    sparse: true,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  }
});

module.exports = function() {
  return mongoose.model('User', schema);
};

