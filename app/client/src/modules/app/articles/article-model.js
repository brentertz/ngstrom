'use strict';

module.exports =
  angular.module('ngstrom.articles')
    .factory('Article', function() {
      return {
        foo: function() {
          return 'bar';
        }
      };
    });
