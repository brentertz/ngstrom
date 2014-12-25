'use strict';

module.exports =
  angular.module('ngstrom.articles')
    .factory('ArticlesService', ['Restangular', 'Article', function(Restangular, Article) {
      var service = Restangular.service('articles');

      Restangular.extendModel('articles', function(article) {
        return angular.extend(article, Article);
      });

      return service;
    }]);
