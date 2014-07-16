'use strict';

angular.module('roverApp')
  .directive('gmaps', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs){
      	
        element.width($window.innerWidth);
      	element.height($window.innerHeight);
        
        var map = new GMaps({
  			  div : '#'+attrs.id,
  			  lat : 9.946114,
  			  lng : -84.088296
		    });
        
        map.map.setOptions({'scrollwheel': false});
        
        navigator.geolocation.getCurrentPosition(function(position){

          var markerObj = [{lat:9.946114,lng:-84.088296},{lat:position.coords.latitude,lng:position.coords.longitude}];
          
          map.addMarkers([{
            lat   : 9.946114,
            lng   : -84.088296,
            title : 'Motores Britanicos'
          },
          {
            lat   : position.coords.latitude,
            lng   : position.coords.longitude,
            title : 'User'
          }]);

          var bounds = new google.maps.LatLngBounds();
          _.each(markerObj, function(marker){
            bounds.extend(new google.maps.LatLng (marker.lat,marker.lng));
          });

          map.map.fitBounds(bounds);

          map.drawRoute({
            origin        : [position.coords.latitude, position.coords.longitude],
            destination   : [9.946114, -84.088296],
            travelMode    : 'driving',
            strokeColor   : '#dc4c4c',
            strokeOpacity : 1,
            strokeWeight  : 5
          });
        });
      }
    };
  });
