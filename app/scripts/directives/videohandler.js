'use strict';

angular.module('roverApp')
  .directive('videohandler', function () {
    return {
      restrict: 'A',
      link : function(scope, element, attrs){
      	var video = element[0];
        video.muted = true;
        video.loop  = true; 
      }
    };
  });
