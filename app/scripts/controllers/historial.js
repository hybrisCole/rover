'use strict';

angular.module('roverApp')
  .controller('HistorialCtrl', function ($scope,vin){
	var vinNum = localStorage.getItem('vinNum');
    vin.getUser(vinNum).then(function(user){
      $scope.historial = _.map(user.historial, function(hist){
      	var obj = {
      		'fecha'  : $scope.proximaFecha = moment(hist.fecha).format('DD MMMM YYYY'),
      		'km'     : hist.km,
      		'list'   : hist.listado
      	};
      	return obj;
      });
    });
  });
