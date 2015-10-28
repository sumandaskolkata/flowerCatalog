var http=require('http');
var fs=require('fs');

var responceHandeler=function(request,response){
	var requestedUrl=request.url;
	if(requestedUrl=="/")
		requestedUrl='/index.html';
	fs.readFile('.'+requestedUrl,function(err,data){
		if(err){
			response.writeHead(404);
			response.end("bad request");
			return; 
		}
		response.writeHead(200);
		response.end(data);
	})
};
var server=http.createServer(responceHandeler);
server.listen(4040);