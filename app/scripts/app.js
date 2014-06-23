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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/vista3.html',
        controller: 'Vista3Ctrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/vista3', {
        templateUrl: 'views/vista3.html',
        controller: 'Vista3Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
