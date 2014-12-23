'use strict';

module.exports =
  angular.module('ngstrom.home', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('home', {
        url: '/',
        template: require('./home-template.html')
      });
    }]);
