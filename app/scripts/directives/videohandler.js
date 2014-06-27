'use strict';

angular.module('roverApp')
  .directive('videohandler', function($timeout){
    return {
      restrict: 'A',
      link : function(scope, element){
        $timeout(function() {
          var video = element[0];
          video.play();
          video.muted = true;
          video.loop  = true; 
        }, 0);
      }
    };
  });
