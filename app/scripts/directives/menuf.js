'use strict';

angular.module('roverApp')
  .directive('menuf', function (mailer) {
    return {
      templateUrl: 'views/menuf.html',
      restrict: 'E',
      link: function(scope){

      	scope.showEmer = false;

      	scope.openModal = function(){
      		if(!scope.showEmer){
      			scope.showEmer = true;
      			mailer.submitForm().then(function(data){
      				console.log(data);
      			});
      		}else{
      			scope.showEmer = false;
      		}
      	}
        
      }
    };
  });
