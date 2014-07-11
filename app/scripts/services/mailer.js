'use strict';

angular.module('roverApp')
  .factory('mailer', function($http,$q) {
    return {
      submitForm : function(){
          var defer = $q.defer();
          $http({
            method: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
              key: "Mc6ZOBIWpMlars79hfS3sw",
              message: {
                from_email: 'carloz@ramirez.com',
                to: [{
                  email: "abdeldw@gmail.com",
                  name: "Abdel Atencio",
                  type: "to"
                }, {
                  email: "acpii2005@gmail.com",
                  name: "Beto",
                  type: "to"
                }],
                autotext: "true",
                subject: "Emergencia Rover",
                html: "HELP NEEDED!!!!! CARLOZ RAMIREZ"
              }
            }
          }).success(function (data) {
            defer.resolve(data);
        });
        return defer.promise;
      }
    };
  });
