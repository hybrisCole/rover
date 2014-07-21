'use strict';

angular.module('roverApp')
  .factory('mailer', function($http,$q,$cookieStore,vin){
    var vinNum = $cookieStore.get('vinNum');
    var person = {};
    vin.getUser(vinNum).then(function(user){
      person = user[0];
    });
    return {
      submitForm : function(obj){
        /* jshint camelcase: false*/
        var template = '';
        if(obj.type === 'E'){
          template = '<p>Cliente:'+person.nombre+'</p><p>VIN:'+person.vin+'</p><p>'+obj.ubicacion+'</p><a href="http://maps.google.com/maps?q='+obj.cords[0]+','+obj.cords[1]+'&ll='+obj.cords[0]+','+obj.cords[1]+'&z=17">Ubicacion</a>'
        }
        var defer = $q.defer();
        $http({
          method: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            key: 'Mc6ZOBIWpMlars79hfS3sw',
            message: {
              from_email: 'carloz@ramirez.com',
              to: [{
                email: 'abdeldw@gmail.com',
                name: 'Abdel Atencio',
                type: 'to'
              }, {
                email: 'acpii2005@gmail.com',
                name: 'Beto',
                type: 'to'
              }],
              autotext: 'true',
              subject: obj.subj,
              html: template
            }
          }
        }).success(function (data) {
          defer.resolve(data);
        });
        return defer.promise;
      }
    };
  });
