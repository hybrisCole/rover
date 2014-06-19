'use strict';

/**
 * @ngdoc function
 * @name roverAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the roverAppApp
 */
angular.module('roverAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
