'use strict';

module.exports =
  angular.module('ngstrom.home', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: '/',
        template: require('./home.html'),
        controller: 'HomeController'
      });
    }]);
