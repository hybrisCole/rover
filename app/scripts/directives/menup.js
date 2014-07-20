'use strict';

angular.module('roverApp')
  .directive('menup', function ($location) {
    return {
      templateUrl: 'views/menup.html',
      restrict: 'E',
      scope : {
        back : '&'
      },
      link: function(scope){

      	var history  = [];
        scope.home   = false;
      	
        scope.$on('$routeChangeSuccess', function(){
          if($location.path() !== history[history.length -1] && !_.contains(history, $location.path())){
      			history.push($location.path());
      		}

          if($location.path() !== '/home'){
            scope.home = true;
          }else{
            scope.home = false;
          }

          scope.goback = history[history.length - 2];

      	});

        scope.$on('goBack', function(){
          if(history.length > 1){
            history.pop();
          }
          scope.goback = history[history.length - 1];
        });
      }
    };
  });
