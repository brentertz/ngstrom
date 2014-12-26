'use strict';

require('angular');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('restangular');

require('./modules/app/main');
require('./modules/app/home');
require('./modules/app/articles');
require('./modules/common/services/lodash-service');

angular.module('ngstrom', [
  'ngstrom.main',
  'ngstrom.home',
  'ngstrom.articles'
])
.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}])
.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api');
  RestangularProvider.setRestangularFields({ id: '_id' });
}])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}]);
