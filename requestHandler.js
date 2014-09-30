function helloPage(response,userName){
  var message=(typeof userName==='string' ? "Hello "+userName : "Hello User");    
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write(message);
  response.end();
}

function pageNotFound(response){
  var message="Page Not Found!";    
  response.statusCode=(404);
  response.write(message);
  response.end();
}

exports.helloPage=helloPage
exports.pageNotFound=pageNotFound
