'use strict';

angular.module('roverApp')
  .directive('fulldiv', function ($window, $location) {
    return {
      restrict: 'A',
      link: function(scope, element) {
       	if($location.path() === '/'){
       		element.height($window.innerHeight);
       		element.parent().css({'margin-top':0,'margin-bottom':0});
       		angular.element('body').css('overflow','hidden');
       	}else{
       		element.height($window.innerHeight - 110);
       	}
      }
    };
  });
