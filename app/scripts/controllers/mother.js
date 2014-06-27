'use strict';

angular.module('roverApp')
  .controller('MotherCtrl', function ($scope,$location) {
    $scope.val = false;
    $scope.viewAnimation = 'slide-velocity-next';
    $scope.goTo = function(location){
      $scope.viewAnimation = 'slide-velocity-next';
      $location.path(location);
    };
    $scope.goBack = function(location){
      $scope.viewAnimation = 'slide-velocity-previous';
      $location.path(location);
    };
  });
