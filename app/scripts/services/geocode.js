'use strict';

angular.module('roverApp')
  .factory('geocode', function($q,$http){
    return {
      getAddress : function (lat,lng){
        var deferred = $q.defer();
        $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=true').success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject();
        });
        return deferred.promise;
      }
    };
  });
