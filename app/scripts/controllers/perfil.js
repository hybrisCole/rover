'use strict';

angular.module('roverApp')
  .controller('PerfilCtrl', function ($scope,$location,firebaseService,vin) {
    $scope.btnGuardarTexto = 'Guardar';
    $scope.perfilInfo = {
      email:'',
      celular:''
    };

    firebaseService
      .getPerfilInfo(localStorage.getItem('vinNum'))
      .then(function(perfilFireInfo){
        $scope.perfilInfo = perfilFireInfo;
    });
    $scope.cerrarSession = function(){
    	localStorage.removeItem('vinNum');
      vin.cerrarSesion();
    	$location.path('/');
    };
    $scope.guardarDatos = function(){
      $scope.btnGuardarTexto = 'Guardando...';
      firebaseService.setPerfilInfo(localStorage.getItem('vinNum'),
        $scope.perfilInfo).then(function(){
          $scope.btnGuardarTexto = 'Listo!';
        });
    };
  });
