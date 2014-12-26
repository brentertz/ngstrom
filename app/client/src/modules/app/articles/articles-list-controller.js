'use strict';

module.exports =
  angular.module('ngstrom.articles')
    .controller('ArticlesListController', ['$scope', 'ArticlesService', function($scope, ArticlesService) {
      ArticlesService.list().then(function(articles) {
        $scope.articles = articles;
      });
    }]);
