'use strict';

/**
 * @ngdoc function
 * @name roverAppApp.controller:AccesoriosCtrl
 * @description
 * # AccesoriosCtrl
 * Controller of the roverApp
 */
angular.module('roverApp')
  .controller('AccesoriosCtrl', function ($scope,vin){

    var vinNum = localStorage.getItem('vinNum');

    vin.getUser(vinNum).then(function(user){
      var model = user[0].modelo.replace(/\s/g, '').toLowerCase();
      vin.getAcsry(model).then(function(data){
        console.log(data);
        $scope.accesorios = data;
      });
    });
  });
