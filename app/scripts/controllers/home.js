'use strict';

/**
 * @ngdoc function
 * @name roverApp.controller:AboutCtrl
 * @description
 * # HomeCtrl
 * Controller of the roverApp
 */
angular.module('roverApp')
  .controller('HomeCtrl', function($scope,mailer){
    $scope.msj = 'Agendar Revisión';
    $scope.agendar = function(){
      var obj = {
        'subj'  : 'REVISION APP',
        'type'  : 'R',
        'fecha' : $scope.proximaFecha,
        'km'    : $scope.user.kmProximaRev 
      };

      mailer.submitForm(obj).then(function(data){
        if(data[0].status === 'sent'){
          $scope.icono = 'fa fa-check-circle-o';
          $scope.msj = 'Agendada';
        }else{
          $scope.icono = 'fa fa-times-circle-o';
          $scope.msj = 'Hubor un error con su mensaje, por favor intente de nuevo';
        }
      });

    };
});
