'use strict';

angular.module('roverApp')
  .controller('MotherCtrl', function ($scope,$location) {
    $scope.val = false;
    $scope.viewAnimation = 'next-animation';
    $scope.goTo = function(location){
      $scope.viewAnimation = 'next-animation';
      $location.path(location);
    };
    $scope.goBack = function(location){
      $scope.viewAnimation = 'previous-animation';
      $location.path(location);
    };
  });
