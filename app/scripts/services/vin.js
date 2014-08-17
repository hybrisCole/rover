'use strict';

angular.module('roverApp')
  .factory('vin', function($http,$q){
    var OjbVIN;
    return {
      getUser : function(vinNumber){
        var deferred = $q.defer();
        if(OjbVIN){
          deferred.resolve(OjbVIN);
        }else{
          $http.get('http://motoresbritanicos-vinserver.rhcloud.com/vin/'+vinNumber).success(function(response){
            OjbVIN = response;
            deferred.resolve(OjbVIN);
          }).error(function(){
            deferred.reject();
          });
        }
        return deferred.promise;
      },
      getAcsry : function(model){
        var deferred = $q.defer();
        $http.get('./json/accesorios.json').success(function(data){
          var acsry = _.where(data,{ 'modelo':model});
          deferred.resolve(acsry[0]);
        }).error(function(){
          deferred.reject();
        });
        return deferred.promise;
      },
      cerrarSesion:function(){
        OjbVIN = undefined;
      }
    };
  });
