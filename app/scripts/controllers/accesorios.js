'use strict';

/**
 * @ngdoc function
 * @name roverAppApp.controller:AccesoriosCtrl
 * @description
 * # AccesoriosCtrl
 * Controller of the roverApp
 */
angular.module('roverApp')
  .controller('AccesoriosCtrl', function ($scope,vin,LSVIN){

    var vinNum = localStorage.getItem(LSVIN);

    vin.getUser(vinNum).then(function(user){
      var model = user.modelo.replace(/\s/g, '').toLowerCase();
      var objM  = [
        'discovery',
        'freelander',
        'rangerover',
        'rangeroverevoque',
        'rangeroversport'
      ];

      if(!_.contains(objM,model)){
        model = localStorage.getItem('model');
      }
      
      vin.getAcsry(model).then(function(data){
        console.log(data);
        $scope.accesorios = data;
      });
    });
  });
