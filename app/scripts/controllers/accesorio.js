'use strict';

angular.module('roverApp')
  .controller('AccesorioCtrl', function ($scope,$routeParams,
     $location,$rootScope,vin,mailer,LSVIN) {
    var vinNum  = localStorage.getItem(LSVIN);
    var codigo  = $routeParams.id;
    $scope.msj  = 'Encargar';
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate;
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
        var acce = _.where(data.accesorios,{ 'codigo': codigo});
        $scope.modelo = data.modelo;
        $scope.accesorio = acce[0];
        var currentIndex = _.indexOf(data.accesorios, acce[0]);

        $scope.left = function(){
          currentIndex += 1;
          if(currentIndex > data.accesorios.length - 1){
            currentIndex = data.accesorios.length - 1;
            navigator.vibrate(1000);
          }
          $rootScope.viewAnimation = 'slide-velocity-next';
        	$location.path('/accesorio/'+data.accesorios[currentIndex].codigo);
        };

        $scope.right = function(){
        	currentIndex -= 1;
          if(currentIndex < 0){
            currentIndex = 0;
            navigator.vibrate(1000);
          }
          $rootScope.viewAnimation = 'slide-velocity-previous';
        	$location.path('/accesorio/'+data.accesorios[currentIndex].codigo);
        };

        $scope.encargo = function(){
        	console.log(data.accesorios[currentIndex]);
        	var obj = {
            'subj' : 'Ventas APP',
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
