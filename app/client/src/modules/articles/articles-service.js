'use strict';

module.exports =
  angular.module('ngstrom.articles')
    .factory('ArticlesService', ['Restangular', function(Restangular) {
      return Restangular.service('articles');
    }]);
