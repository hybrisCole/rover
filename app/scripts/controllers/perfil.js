'use strict';

angular.module('roverApp')
  .controller('PerfilCtrl', function ($scope,$cookieStore,$location) {
    $scope.cerrarSession = function(){
    	$cookieStore.remove('vinNum');
    	$location.path('/');
    };
  });
