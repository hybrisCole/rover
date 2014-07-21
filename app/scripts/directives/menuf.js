'use strict';

angular.module('roverApp')
  .directive('menuf', function (mailer,$location) {
    return {
      templateUrl: 'views/menuf.html',
      restrict: 'E',
      link: function(scope){

      	scope.showEmer = false;

        var routes = [
          '/accesorios',
          '/historial',
          '/near',
          '/perfil'
        ];

      	scope.openModal = function(){
      		if(!scope.showEmer){
      			scope.showEmer = true;
      			mailer.submitForm().then(function(data){
      				console.log(data);
      			});
      		}else{
      			scope.showEmer = false;
      		}
      	};   

        scope.$on('$routeChangeSuccess', function(){
          var path = $location.path();
          var pathClass = path.substr(1);
          if(_.contains(routes,path)){
            angular.element('.menuf .normal-btn').removeClass('current');
            angular.element('.menuf').find('.'+pathClass).addClass('current');
          }
        });
      }
    };
  });
