'use strict';

/**
 * @ngdoc function
 * @name roverApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the roverApp
 */
angular.module('roverApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
