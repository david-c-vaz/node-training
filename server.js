var http = require("http");
var url = require("url");

function startServer(route,handle,port){

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
  server.listen(Number(port));
}

exports.start=startServer

