'use strict';

angular.module('roverApp')
  .controller('PerfilCtrl', function ($scope,$location,vin) {
    $scope.cerrarSession = function(){
    	localStorage.removeItem('vinNum');
      vin.cerrarSesion();
    	$location.path('/');
    };
  });
