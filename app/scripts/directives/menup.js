'use strict';

angular.module('roverApp')
  .directive('menup', function ($location) {
    return {
      templateUrl: 'views/menup.html',
      restrict: 'E',
      link: function(scope){

      	var history  = [];

      	scope.$on('$routeChangeSuccess', function(event){
      		history.push($location.path());
      		console.log(history);
      	});

      	scope.back = function(){
      		 if(history.length > 1){
            	history.pop();
            	console.log(history);
          	}
          	scope.goback = history[history.length - 1];
          	console.log(scope.goback);
          	$location.path(scope.goback);
      	}
        
      }
    };
  });
