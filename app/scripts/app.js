'use strict';

/**
 * @ngdoc overview
 * @name roverApp
 * @description
 * # roverApp
 *
 * Main module of the application.
 */

angular
  .module('roverApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngSlideVelocity'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/accesorios', {
        templateUrl: 'views/accesorios.html',
        controller: 'AccesoriosCtrl'
      })
      .when('/near', {
        templateUrl: 'views/near.html',
        controller: 'NearCtrl'
      })
      .when('/historial', {
        templateUrl: 'views/historial.html',
        controller: 'HistorialCtrl'
      })
      .when('/perfil', {
        templateUrl: 'views/perfil.html',
        controller: 'PerfilCtrl'
      })
      .when('/accesorio/:id', {
        templateUrl: 'views/accesorio.html',
        controller: 'AccesorioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope,$location,$timeout,$cookieStore,vin){
    
    $rootScope.menu = false;

    $rootScope.$on('$routeChangeSuccess',function(){
      
      if($location.path() !== '/'){
        $timeout(function() {
          $rootScope.menu = true;
        }, 300);
      }else{
        $rootScope.menu = false;
      }

      if(!_.isUndefined($cookieStore.get('vinNum')) && $location.path() === '/'){
        vin.getUser($cookieStore.get('vinNum')).then(function(data){
          if(!_.isEmpty(data)){
            $location.path('/home');
          }else{
            console.log('lo sentimos el vin no existe');
          }
        });
      }

    });
  });
