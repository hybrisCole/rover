'use strict';

angular.module('roverApp')
  .controller('PerfilCtrl', function ($scope,$location,firebaseService,vin) {
    $scope.btnGuardarTexto = 'Guardar';
    firebaseService
      .getPerfilInfo(localStorage.getItem('vinNum'))
      .then(function(perfilFireInfo){
        if(perfilFireInfo.email === ''){
          vin.getUser(localStorage.getItem('vinNum')).then(function(user){
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
