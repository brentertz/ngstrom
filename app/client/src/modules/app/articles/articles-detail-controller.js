'use strict';

module.exports =
  angular.module('ngstrom.articles')
    .controller('ArticlesDetailController', ['$scope', '$stateParams', 'ArticlesService', function($scope, $stateParams, ArticlesService) {
      ArticlesService.one($stateParams.articleId).get().then(function(article) {
        $scope.article = article;
      });
    }]);
