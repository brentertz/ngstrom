'use strict';

module.exports =
  angular.module('ngstrom.articles', ['ui.router', 'restangular', 'common.services'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, ArticlesService) {
      $stateProvider
        .state('articles', {
          abstract: true,
          url: '/articles',
          template: require('./articles.html')
        })
        .state('articles.list', {
          url: '',
          template: require('./articles-list.html'),
          controller: 'ArticlesListController'
        })
        .state('articles.detail', {
          url: '/:articleId',
          template: require('./articles-detail.html'),
          controller: 'ArticlesDetailController'
        });
    }]);
