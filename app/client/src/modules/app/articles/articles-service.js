'use strict';

module.exports =
  angular.module('ngstrom.articles')
    .factory('ArticlesService', ['$q', 'Restangular', 'Article', function($q, Restangular, Article) {
      var service = Restangular.service('articles');
      var cache = {};
      var listCached = false;

      Restangular.extendModel('articles', function(article) {
        return angular.extend(article, Article);
      });

      return {
        list: function() {
          var dfd = $q.defer();

          if (listCached) {
            dfd.resolve(cache);
          } else {
            service.getList().then(function(articles) {
              articles.forEach(function(article) {
                cache[article._id] = article.plain();
              });
              listCached = true;
              dfd.resolve(articles);
            });
          }

          return dfd.promise;
        },
        get: function(id) {
          var dfd = $q.defer();
          var cachedItem = cache[id];

          if (cachedItem) {
            dfd.resolve(cachedItem);
          } else {
            service.one(id).get().then(function(article) {
              cachedItem = cache[id] = article.plain();
              dfd.resolve(cachedItem);
            });
          }

          return dfd.promise;
        }
      };
    }]);
