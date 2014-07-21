'use strict';

angular.module('roverApp')
  .directive('menuf', function (mailer,$location,geocode) {
    return {
      templateUrl: 'views/menuf.html',
      restrict: 'E',
      link: function(scope){

      	scope.showEmer = false;
        scope.isReady  = false;
        scope.msj      = 'Obteniendo ubicación por favor espere...';
        scope.icon     = 'fa fa-circle-o-notch fa-spin fa-4x';
        
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
                scope.latLng = [position.coords.latitude, position.coords.longitude];
                if(data.status === 'OK'){
                  scope.isReady = true;
                }
              });
            });
      		}else{
      			scope.showEmer = false;
      		}
      	};   

        scope.sendMail = function(){
          scope.msj      = 'Enviando un mensaje a la agencia, por favor espere!';
          scope.isReady  = false;
          var obj = {
            'subj' : 'EMERGENCIA APP',
            'type' : 'E',
            'ubicacion' : scope.ubicacion,
            'cords'     : scope.latLng,
            'coment'    : scope.coment
          };

          mailer.submitForm(obj).then(function(data){
            if(data[0].status === 'sent'){
              scope.icon     = 'fa fa-check-circle-o fa-4x';
              scope.msj = 'Su mensaje ha sido enviando, en breve lo contactaremos!';
            }else{
              scope.icon = 'fa fa-times-circle-o fa-4x';
              scope.msj = 'Hubor un error con su mensaje, por favor intente de nuevo';
            }
          });
        };
      
        scope.$on('$routeChangeSuccess', function(){
          var path = $location.path();
          var pathClass = path.substr(1);
          angular.element('.menuf .normal-btn').removeClass('current');
          if(_.contains(routes,path)){
            angular.element('.menuf').find('.'+pathClass).addClass('current');
          }
        });
      }
    };
  });
