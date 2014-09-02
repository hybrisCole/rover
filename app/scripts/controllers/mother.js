'use strict';

angular.module('roverApp')
  .controller('MotherCtrl', function($scope,$rootScope,$location,vin,LSVIN){
    
    $rootScope.menu = false;
    var vinNum = '';
    $rootScope.$on('$routeChangeSuccess',function(){
      if(localStorage.getItem(LSVIN) !== null){
        vinNum = localStorage.getItem(LSVIN);
        vin.getUser(vinNum).then(function(user){
          $scope.user = user;
          $scope.nombre = user.nombre;
          $scope.ultimaRev = $scope.user.ultimaRevInfo[0];
          $scope.ultimaFecha  = moment($scope.user.fechaUltimaRev).format('DD MMMM YYYY');
          $scope.proximaFecha = moment($scope.user.fechaProximaRev).format('DD MMMM YYYY');
        });
      }
    });
    
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
