'use strict';

module.exports =
  angular.module('ngstrom.home')
    .controller('HomeController', ['$scope', function($scope) {
      $scope.name = 'World!';
    }]);
