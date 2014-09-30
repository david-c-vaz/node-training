var http = require("http");
var url = require("url");

function startServer(route,handle){

  function onRequest(request,response){
    var pathName=url.parse(request.url,true).pathname;
    route(handle,pathName,response);
  }

  var server=http.createServer(onRequest);
  server.on('error', function (e) {
    if (e.code == 'EADDRINUSE') {
      console.log('Address in use! Please try after some time.');
    }
  });
  server.listen(8000);
}

exports.start=startServer

