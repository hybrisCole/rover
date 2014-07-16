'use strict';

angular.module('roverApp')
  .controller('MotherCtrl', function($scope,$rootScope,$location){
    $rootScope.menu = false;

    $scope.viewAnimation = 'slide-velocity-next';
    $scope.goTo = function(location){
      $scope.viewAnimation = 'slide-velocity-next';
      $location.path(location);
    };
    $scope.goBack = function(location){
      console.log(location);
      $scope.viewAnimation = 'slide-velocity-previous';
      $location.path(location);
      $rootScope.$broadcast('goBack');
    };
  });
