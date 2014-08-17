var Hapi = require('hapi'),
  server = new Hapi.Server(3000,{ cors: true }),
  http = require('http');

server.route({
  method: 'GET',
  path: '/vin/{codigoVIN}',
  handler: function (request, reply) {

    http.get('http://www.motoresbritanicos.net/vincltes/'+request.params.codigoVIN+'.html', function(res) {
      var body = '';
      res.on('data', function(chunk) { body += chunk; });
      res.on('end', function() {
        reply(JSON.parse(body));
      });
    });
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});