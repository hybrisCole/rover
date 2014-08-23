'use strict';

angular.module('roverApp')
  .directive('carousel', function ($window,vin) {
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
        	element.find('#skroll li').first().velocity({marginLeft : move+'px'}, 300, 'swing');
        };

        scope.right = function(){
          var liWidth = element.find('#skroll li').first().width() + 15;
          move = move + liWidth;
          if(move > 0){
            move = 0;
          }
        	element.find('#skroll li').first().velocity({marginLeft : move+'px'}, 300, 'swing');
        };

        var vinNum = localStorage.getItem('vinNum');

        vin.getUser(vinNum).then(function(user){
          
          var model = user.modelo.replace(/\s/g, '').toLowerCase();
          
          var objM  = [
            'discovery',
            'freelander',
            'rangerover',
            'rangeroverevoque',
            'rangeroversport'
          ];

          if(!_.contains(objM,model)){
            model = objM[Math.floor((Math.random() * 5) + 1)];
            localStorage.setItem('model', model);
          }

          vin.getAcsry(model).then(function(data){
            scope.accesorios = data;
          });
        });
      }
    };
  });
