'use strict';

/**
 * @ngdoc function
 * @name roverApp.controller:AboutCtrl
 * @description
 * # HomeCtrl
 * Controller of the roverApp
 */
angular.module('roverApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.carousel = [
    	{img : 'http://placekitten.com/150/150'},
    	{img : 'http://placekitten.com/150/150'},
      {img : 'http://placekitten.com/150/150'},
      {img : 'http://placekitten.com/150/150'},
      {img : 'http://placekitten.com/150/150'},
      {img : 'http://placekitten.com/150/150'},
      {img : 'http://placekitten.com/150/150'},
      {img : 'http://placekitten.com/150/150'},
      {img : 'http://placekitten.com/150/150'},
      {img : 'http://placekitten.com/150/150'},
      {img : 'http://placekitten.com/150/150'}
    ];
  });
