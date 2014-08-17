'use strict';

/**
 * @ngdoc function
 * @name roverApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the roverApp
 */
angular.module('roverApp')
  .controller('MainCtrl', function ($scope,$location,vin){
  	$scope.vin = '';

    $scope.sendVin = function(){
      if($scope.vin !== ''){
        vin.getUser($scope.vin).then(function(data){
          if(!_.isEmpty(data)){
            localStorage.setItem('vinNum',$scope.vin);
            $scope.viewAnimation = 'slide-velocity-next';
            $location.path('/home');
          }else{
            $scope.errorVin = 'Su VIN no se encuentra registrado';
          }
        });
      }else{
        $scope.errorVin = 'Ingrese su VIN';
      }
    };
  });
