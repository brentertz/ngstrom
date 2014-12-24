'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: true
	},
	content: {
		type: String,
		trim: true,
		required: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

module.exports = function() {
  return mongoose.model('Article', articleSchema);
};
