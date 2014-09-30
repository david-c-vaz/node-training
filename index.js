var server=require("./server");
var router=require('./router')
var requestHandler=require('./requestHandler')

var handle={};
handle["/hello"]=requestHandler.helloPage;
handle["/pageNotFound"]=requestHandler.pageNotFound;
server.start(router.route,handle,process.argv[2]);
