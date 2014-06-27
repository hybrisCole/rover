'use strict';

angular.module('roverApp')
  .directive('carousel', function ($window) {
    return {
      templateUrl : 'views/carousel.html',
      restrict    : 'E',
      scope : {
      	imgs : '='
      },
      link: function(scope, element){
        var move = 0;
        
        scope.left = function(){
          var liWidth = element.find('#skroll li').first().width() + 15;
        	move = move - liWidth;
          if(element.find('#skroll li').last().position().left < angular.element($window).width()){
            move = (move + (angular.element($window).width() - element.find('#skroll li').last().position().left)) + 20;
          }
        	element.find('#skroll li').first().velocity({marginLeft : move+'px'}, 1000, 'swing');
        };

        scope.right = function(){
          var liWidth = element.find('#skroll li').first().width() + 15;
          move = move + liWidth;
          if(move > 0){
            move = 0;
          }
        	element.find('#skroll li').first().velocity({marginLeft : move+'px'}, 1000, 'swing');
        };
      }
    };
  });
