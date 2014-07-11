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
      .when('/vista3', {
        templateUrl: 'views/vista3.html',
        controller: 'Vista3Ctrl'
      })
      .when('/accesorios', {
        templateUrl: 'views/accesorios.html',
        controller: 'AccesoriosCtrl'
      })
      .when('/near', {
        templateUrl: 'views/near.html',
        controller: 'NearCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope, $location, $timeout){
    
    $rootScope.menu = false;
    
    $rootScope.$on('$locationChangeStart',function () {
      if($location.path() !== '/'){
        $timeout(function() {
          $rootScope.menu = true;
        }, 500);
      }else{
        $rootScope.menu = false;
      }
    });
  });
