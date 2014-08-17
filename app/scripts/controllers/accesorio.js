'use strict';

angular.module('roverApp')
  .controller('AccesorioCtrl', function ($scope,$routeParams,$location,vin,mailer) {
    var vinNum  = localStorage.getItem('vinNum');
    var codigo  = $routeParams.id;
    $scope.msj  = 'Encargar';
    vin.getUser(vinNum).then(function(user){
      var model = user.modelo.replace(/\s/g, '').toLowerCase();
      vin.getAcsry(model).then(function(data){
        var acce = _.where(data.accesorios,{ 'codigo': codigo});
        $scope.modelo = data.modelo;
        $scope.accesorio = acce[0];
        var currentIndex = _.indexOf(data.accesorios, acce[0]);

        $scope.left = function(){
        	currentIndex = currentIndex - 1;
        	if(currentIndex < 0){
        		currentIndex = 0;
        		navigator.vibrate(1000);
        	}
        	$location.path('/accesorio/'+data.accesorios[currentIndex].codigo);
        };

        $scope.right = function(){
        	currentIndex = currentIndex + 1;
        	if(currentIndex > data.accesorios.length - 1){
        		currentIndex = data.accesorios.length - 1;
        		navigator.vibrate(1000);
        	}
        	$location.path('/accesorio/'+data.accesorios[currentIndex].codigo);
        };

        $scope.encargo = function(){
        	console.log(data.accesorios[currentIndex]);
        	var obj = {
            'subj' : 'ENCARGO APP',
            'type' : 'EN',
            'acc'  : data.accesorios[currentIndex]
          };

          mailer.submitForm(obj).then(function(data){
            if(data[0].status === 'sent'){
              $scope.icono = 'fa fa-check-circle-o';
              $scope.msj  = 'Encargado';
            }else{
            	$scope.icono = 'fa fa-times-circle-o';
              $scope.msj = 'Erorr de encargo';
            }
          });

        };

      });
    });
  });
