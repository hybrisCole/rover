'use strict';

angular.module('roverApp')
  .directive('carousel', function ($window,$cookieStore,vin) {
    return {
      templateUrl : 'views/carousel.html',
      restrict    : 'E',
      scope : {
        go : '&'
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

        var vinNum = $cookieStore.get('vinNum');

        vin.getUser(vinNum).then(function(user){
          var model = user[0].modelo.replace(/\s/g, '').toLowerCase();
          vin.getAcsry(model).then(function(data){
            scope.accesorios = data;
          });
        });
      }
    };
  });
