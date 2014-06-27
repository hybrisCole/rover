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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
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
            easing:'ease',
            duration:150,
            complete:function(){
              done();
            }
          }
        );
      },
      leave: function(element,done) {
        $(element).velocity({left:'100%'},
          {
            easing:'ease',
            duration:150,
            complete:function(){
              done();
            }
          }
        );
      }
    };
  }).run(function($rootScope, $location){
    $rootScope.$on('$locationChangeStart',function () {
      if($location.path() !== '/'){
        $rootScope.menu = true;
      }else{
        $rootScope.menu = false;
      }
    });
  });
