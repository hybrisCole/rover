'use strict';

angular.module('roverApp')
  .directive('fulldiv', function ($window) {
    return {
      restrict: 'A',
      link: function(scope, element) {
       	element.height($window.innerHeight - 110);
      }
    };
  });
