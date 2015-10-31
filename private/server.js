var http=require('http');
var fs=require('fs');
var c=require('./../public/javascript/comment.js').r;

var responceHandeler=function(request,response){
	var requestedUrl=request.url;
	if(requestedUrl=="/")
		requestedUrl='/index.html';
	console.log(requestedUrl);
	var matched=requestedUrl.match(/\/userDetails\?*/)
	if(matched && matched.index==0){
		c.handelInputText(requestedUrl)
		requestedUrl='/guestbook.html'
	}
	console.log('./../public'+requestedUrl)
	fs.readFile('./../public'+requestedUrl,function(err,data){
		if(err){
			response.writeHead(404);
			response.end("not found");
			return; 
		}
		response.writeHead(200);
		response.end(data);
	})
};
var server=http.createServer(responceHandeler);
server.listen(4040);







