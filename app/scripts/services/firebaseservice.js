'use strict';

/**
 * @ngdoc service
 * @name roverAppApp.firebaseService
 * @description
 * # firebaseService
 * Factory in the roverAppApp.
 */
angular.module('roverApp')
  .factory('firebaseService', function ($q,FIREBASEURL) {

    // Public API here
    return {
      getPerfilInfo: function (vin) {
        var deferred = $q.defer(),
            roverRef = new Firebase(FIREBASEURL+vin);

        roverRef.on('value', function(snapshot) {
          var informacionPerfil = snapshot.val();
          if(_.isNull(informacionPerfil)){
            informacionPerfil = {
              celular:'',
              email:''
            };
          }
          deferred.resolve(informacionPerfil);
        });

        return deferred.promise;
      },
      setPerfilInfo: function(vin,info){
        var deferred = $q.defer(),
          roverRef = new Firebase(FIREBASEURL+vin);

        roverRef.update(info);
        deferred.resolve(info);

        return deferred.promise;
      }
    };
  });
