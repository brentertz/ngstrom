'use strict';

require('angular');
require('angular-ui-bootstrap');
require('angular-ui-router');

require('./modules/home');
require('./modules/articles');

angular.module('ngstrom', [
  'ngstrom.home',
  'ngstrom.articles'
])
.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}]);
