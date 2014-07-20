'use strict';

angular.module('roverApp')
  .controller('MotherCtrl', function($scope,$rootScope,$location,$cookieStore,vin){
    
    $rootScope.menu = false;
    
    var vinNum = $cookieStore.get('vinNum');
    
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

    vin.getUser(vinNum).then(function(user){
      $scope.user = user[0];
      $scope.nombre = user[0].nombre.split(' ').slice(0,2).join(' ');
      var ultimaRev = _.where($scope.user.historial,{'fecha':$scope.user.fechaUltimaRev});
      $scope.ultimaRev = ultimaRev[0];
      $scope.ultimaFecha  = moment($scope.user.fechaUltimaRev).format('DD MMMM YYYY');
      $scope.proximaFecha = moment($scope.user.fechaProximaRev).format('DD MMMM YYYY');
    });

  });
