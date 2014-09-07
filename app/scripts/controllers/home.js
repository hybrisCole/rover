'use strict';

/**
 * @ngdoc function
 * @name roverApp.controller:AboutCtrl
 * @description
 * # HomeCtrl
 * Controller of the roverApp
 */
angular.module('roverApp')
  .controller('HomeCtrl', function($scope,mailer,firebaseService,LSVIN){
    var vinNum = localStorage.getItem(LSVIN);
    firebaseService.getAgenda(vinNum).then(function(data){
      if(!_.isNull(data)){
        $scope.icono = 'fa fa-check-circle-o';
        $scope.msj = 'Agendada';
      }else{
        $scope.msj = 'Agendar Revisión';
        $scope.agendar = function(){      
          var obj = {
            'subj'     : 'Citas APP',
            'type'     : 'R',
            'fecha'    : $scope.proximaFecha,
            'km'       : $scope.user.kmProximaRev,
            'agendada' : true 
          }; 
          mailer.submitForm(obj).then(function(data){
            if(data[0].status === 'sent'){
              firebaseService.agendar(vinNum, obj);
              $scope.icono = 'fa fa-check-circle-o';
              $scope.msj = 'Agendada';
            }else{
              $scope.icono = 'fa fa-times-circle-o';
              $scope.msj = 'Hubor un error con su mensaje, por favor intente de nuevo';
            }
          });
        };
      }
    });
  });
