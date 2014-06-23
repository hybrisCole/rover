'use strict';

angular.module('roverApp')
  .directive('videohandler', function () {
    return {
      restrict: 'A',
      link : function(scope, element){
      	var video = element[0];
        video.play();
        video.muted = true;
        video.loop  = true; 
      }
    };
  });
