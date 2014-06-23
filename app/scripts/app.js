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
  }).animation('.my-crazy-animation', function() {
    return {
      enter: function(element,done) {
        $(element).velocity({left:'0'},
          {
            duration:400,
            complete:function(){
              done();
            }
          }
        );
      },
      leave: function(element,done) {
        $(element).velocity({left:'100%'},
          {
            duration:400,
            complete:function(){
              done();
            }
          }
        );
      }
    };
  });
