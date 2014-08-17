'use strict';

angular.module('roverApp')
  .controller('PerfilCtrl', function ($scope,$location) {
    $scope.cerrarSession = function(){
    	localStorage.removeItem('vinNum');
    	$location.path('/');
    };
  });
