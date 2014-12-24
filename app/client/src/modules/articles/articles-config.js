'use strict';

module.exports =
  angular.module('ngstrom.articles', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('articles', {
          abstract: true,
          url: '/articles',
          template: require('./articles.html'),
          controller: 'ArticlesController'
        })
        .state('articles.list', {
          url: '',
          template: require('./articles-list.html')
        })
        .state('articles.detail', {
          url: '/:id',
          template: require('./articles-detail.html'),
          controller: ['$scope', '$stateParams', function($scope, $stateParams) {
            $scope.article = $scope.articles[$stateParams.id];
          }]
        });
    }]);
