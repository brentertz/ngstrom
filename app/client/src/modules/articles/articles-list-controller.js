'use strict';

module.exports =
  angular.module('ngstrom.articles')
    .controller('ArticlesListController', ['$scope', 'ArticlesService', function($scope, ArticlesService) {
      ArticlesService.getList().then(function(articles) {
        $scope.articles = articles;
      });
    }]);
