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
  .config(function ($routeProvider){
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
  }).run(function($rootScope,$location,$timeout,vin,FIREBASEURL,LSVIN){

    var authRef = new Firebase(FIREBASEURL),
        auth = new FirebaseSimpleLogin(authRef,function(){});

    auth.login('password', {
      email: 'trololo@trololo.com',
      password: 'trololo@trololo.com'
    });

    $rootScope.menu = false;

    $rootScope.$on('$routeChangeSuccess',function(){
      
      if($location.path() !== '/'){
        $timeout(function() {
          $rootScope.menu = true;
          angular.element('body').css('overflow','auto');
        }, 300);
      }else{
        $rootScope.menu = false;
      }

      if(!_.isUndefined(localStorage.getItem(LSVIN)) && $location.path() === '/'){
        vin.getUser(localStorage.getItem(LSVIN)).then(function(data){
          if(!_.isEmpty(data)){
            $location.path('/home');
          }else{
            console.log('lo sentimos el vin no existe');
          }
        });
      }

    });
  });
