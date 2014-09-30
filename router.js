function route(handle,pathName,response){
  if (pathName.indexOf("/hello")==0 && typeof handle['/hello']==="function"){
    var username=pathName.split('/')[2];
    handle['/hello'](response,username);
  }else {
    handle['/pageNotFound'](response);
  }
}

exports.route=route
