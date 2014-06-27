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
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope, $location, $timeout){
    $rootScope.$on('$locationChangeStart',function () {
      if($location.path() !== '/'){
        $timeout(function() {
          $rootScope.menu = true;
        }, 700);
      }else{
        $rootScope.menu = false;
      }
    });
  });
