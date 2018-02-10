/*
获取GET请求内容
由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。
node.js中url模块中的parse函数提供了这个功能。
*/
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	
	//解析url参数
	var params = url.parse(req.url, true).query;
	res.write("网站名:" + params.name);
	res.write("\n");
	res.write("网站URL:" + params.url);
	res.end();
	console.log("Server has started.");
}).listen(3000);


