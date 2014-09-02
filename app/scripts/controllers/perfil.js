'use strict';

angular.module('roverApp')
  .controller('PerfilCtrl', function ($scope,$location,firebaseService,vin,LSVIN) {
    $scope.btnGuardarTexto = 'Guardar';
    firebaseService
      .getPerfilInfo(localStorage.getItem(LSVIN))
      .then(function(perfilFireInfo){
        if(perfilFireInfo.email === ''){
          vin.getUser(localStorage.getItem(LSVIN)).then(function(user){
            $scope.perfilInfo = {
              email:user.correo,
              celular:user.telefono
            };
          });
        }else{
          $scope.perfilInfo = perfilFireInfo;
        }

      });
    $scope.cerrarSession = function(){
    	localStorage.removeItem(LSVIN);
      vin.cerrarSesion();
    	$location.path('/');
    };
    $scope.guardarDatos = function(){
      $scope.btnGuardarTexto = 'Guardando...';
      firebaseService.setPerfilInfo(localStorage.getItem(LSVIN),
        $scope.perfilInfo).then(function(){
          $scope.btnGuardarTexto = 'Listo!';
        });
    };
  });
