'use strict';

module.exports =
  angular.module('ngstrom.articles')
    .controller('ArticlesController', ['$scope', function($scope) {
      $scope.articles = [
        { id: 0, title: 'Lorem', content: 'Lorem ipsum dolor sit amet' },
        { id: 1, title: 'Aenean', content: 'Aenean commodo ligula eget dolor' },
        { id: 2, title: 'Etiam', content: 'Etiam ultricies nisi vel augue' }
      ];
    }]);
