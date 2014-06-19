'use strict';

/**
 * @ngdoc function
 * @name roverApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the roverApp
 */
angular.module('roverApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
