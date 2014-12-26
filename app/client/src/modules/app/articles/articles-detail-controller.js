'use strict';

module.exports =
  angular.module('ngstrom.articles')
    .controller('ArticlesDetailController', ['$scope', '$stateParams', 'ArticlesService', function($scope, $stateParams, ArticlesService) {
      ArticlesService.get($stateParams.articleId).then(function(article) {
        $scope.article = article;
      });
    }]);
