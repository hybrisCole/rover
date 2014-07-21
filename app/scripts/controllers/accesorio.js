'use strict';

angular.module('roverApp')
  .controller('AccesorioCtrl', function ($scope,$cookieStore,$routeParams,vin) {
    var vinNum = $cookieStore.get('vinNum');
    var codigo = $routeParams.id;
    vin.getUser(vinNum).then(function(user){
      var model = user[0].modelo.replace(/\s/g, '').toLowerCase();
      vin.getAcsry(model).then(function(data){
        var acce = _.where(data.accesorios,{ 'codigo': codigo});
        $scope.modelo = data.modelo;
        $scope.accesorio = acce[0];
        var currentIndex = _.indexOf(data.accesorios, acce[0]);
        console.log(data.accesorios[currentIndex]);
      });
    });
  });
