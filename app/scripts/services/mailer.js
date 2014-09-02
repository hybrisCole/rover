'use strict';

angular.module('roverApp')
  .factory('mailer', function($http,$q,vin,firebaseService){
    var mailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return {
      submitForm : function(obj){
        /* jshint camelcase: false*/
        var defer = $q.defer(),
            person = {},
            vinNum = localStorage.getItem('vinNum');
        vin.getUser(vinNum).then(function(user){
          person = user;
          var template = '';
          if(obj.type === 'E'){
            if(obj.coment === undefined){
              obj.coment = 'no hay comentarios';
            }
            template = '<p>Cliente: '+person.nombre+'</p><p>VIN: '+person.vin+'</p><p>comentario adicional: '+obj.coment+'</p><p>Ubicación: '+obj.ubicacion+'</p><a href="http://maps.google.com/maps?q='+obj.cords[0]+','+obj.cords[1]+'&ll='+obj.cords[0]+','+obj.cords[1]+'&z=17">ver ubicacion</a>';
          }else if(obj.type === 'EN'){
            template = '<p>Cliente: '+person.nombre+'</p><p>VIN: '+person.vin+'</p><p>nombre accesorio: '+obj.acc.accesorio+'</p><p>codigo del accesorio: '+obj.acc.codigo+'</p>';
          }else if(obj.type === 'R'){
            template = '<p>Cliente: '+person.nombre+'</p><p>VIN: '+person.vin+'</p><p>fecha :'+obj.fecha+'</p><p>revision de los: '+obj.km+'kilometros</p>';
          }
          firebaseService.getPerfilInfo(vinNum).then(function(perfilInfo){
            var recipients = [{
              email: 'emergencia@motoresbritanicos.com',
              name: 'Emergencias Motores Británicos',
              type: 'to'
            },{
              email: 'abdeldw@gmail.com',
              name: 'Abdel Atencio',
              type: 'to'
            }, {
              email: 'acpii2005@gmail.com',
              name: 'Cole',
              type: 'to'
            }];
            if(mailRegex.test(perfilInfo.email)){
              recipients.push({
                email:perfilInfo.email,
                name:person.nombre,
                type:'to'
              });
            }
            $http({
              method: 'POST',
              url: 'https://mandrillapp.com/api/1.0/messages/send.json',
              data: {
                key: 'Mc6ZOBIWpMlars79hfS3sw',
                message: {
                  from_email: 'noreply@motoresbritanicos.net',
                  to: recipients,
                  autotext: 'true',
                  subject: obj.subj,
                  html: template
                }
              }
            }).success(function (data) {
              defer.resolve(data);
            }).error(function(data) {
              defer.reject(data);
            });
          });
        });
        return defer.promise;
      }
    };
  });
