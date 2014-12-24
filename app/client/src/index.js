'use strict';

require('angular');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('restangular');

require('./modules/home');
require('./modules/articles');
require('./modules/common/services/lodash-service');

angular.module('ngstrom', [
  'ngstrom.home',
  'ngstrom.articles'
])
.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}])
.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api');
}])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}]);
