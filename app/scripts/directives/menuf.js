'use strict';

angular.module('roverApp')
  .directive('menuf', function (mailer,$location,geocode) {
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
          /* jshint camelcase: false*/
      		if(!scope.showEmer){
      			scope.showEmer = true;
            navigator.geolocation.getCurrentPosition(function(position){
              geocode.getAddress(position.coords.latitude, position.coords.longitude).then(function(data){
                scope.ubicacion = data.results[0].formatted_address;
              });
            });
      		}else{
      			scope.showEmer = false;
      		}
      	};   

        scope.sendMail = function(){
          mailer.submitForm().then(function(data){
            console.log(data);
          });
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
