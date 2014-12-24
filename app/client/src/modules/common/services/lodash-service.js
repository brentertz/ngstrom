'use strict';

module.exports =
  angular.module('common.services', [])
    .factory('_', ['$window', function($window) {
      return $window._;
    }]);
