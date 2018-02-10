function say(word){
	console.log(word);
}

function execute(someFunction, value){
	someFunction(value);
}

execute(say, "Hello World!");
/*
以上代码中，我们把 say 函数作为execute函数的第一个变量进行了传递。这里返回的不是 say 的返回值，而是 say 本身！
*/

//匿名函数
/*
我们可以把一个函数作为变量传递。但是我们不一定要绕这个"先定义，再传递"的圈子，我们可以直接在另一个函数的括号中定义和传递这个函数：
*/
function executeA(someFunction, value){
	someFunction(value);
}
executeA(function(word){ console.log(word) }, 
		"Hello yang!");
		
//函数传递是如何让HTTP服务器工作的
var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200,{"Content_type":"text/plain"});
	response.write("Hellp World!");
	response.end();
}).listen(3000);

//等同于:
var http = require("http");

function onRequest(request, response){
	response.writeHead(200, {"Content-type":"text/plain"});
	response.write("Hello world!");
	response.end();
}
http.createServer(onRequest).listen(3000);