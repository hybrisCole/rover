'use strict';

angular.module('roverApp')
  .directive('gmaps', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
      	element.width($window.innerWidth);
      	element.height($window.innerHeight);
        new GMaps({
  			div: '#'+attrs.id,
  			lat: -12.043333,
  			lng: -77.028333
		});
      }
    };
  });
