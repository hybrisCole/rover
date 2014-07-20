'use strict';

angular.module('roverApp')
  .factory('vin', function($http,$q){
    return {
      getUser : function(vinNumber){
        var deferred = $q.defer();
        $http.get('../json/vin.json').success(function(data){
          //TODO:this is dummy please erase in production, data should return the user intead users obj.
          var user = _.where(data,{ 'vin':  vinNumber});
          deferred.resolve(user);
        }).error(function(){
          deferred.reject();
        });
        return deferred.promise;
      },
      getAcsry : function(model){
        var deferred = $q.defer();
        $http.get('../json/accesorios.json').success(function(data){
          var acsry = _.where(data,{ 'modelo':model});
          deferred.resolve(acsry[0]);
        }).error(function(){
          deferred.reject();
        });
        return deferred.promise;
      }
    };
  });
