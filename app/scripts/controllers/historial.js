'use strict';

angular.module('roverApp')
  .controller('HistorialCtrl', function ($scope,$cookieStore,vin){
	var vinNum = $cookieStore.get('vinNum');
    vin.getUser(vinNum).then(function(user){
      $scope.historial = _.map(user[0].historial, function(hist){
      	var obj = {
      		'fecha' : $scope.proximaFecha = moment(hist.fecha).format('DD MMMM YYYY'),
      		'km'    : hist.km,
      		'list'   : hist.listado
      	};
      	return obj;
      });
    });
  });
