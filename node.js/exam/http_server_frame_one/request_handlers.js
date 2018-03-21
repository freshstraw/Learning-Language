/*
路由，顾名思义，是指我们要针对不同的URL有不同的处理方式。例如处理/start的“业务逻辑”就应该和处理/upload的不同。

在现在的实现下，路由过程会在路由模块中“结束”，并且路由模块并不是真正针对请求“采取行动”的模块，否则当我们的应用程序变得更为复杂时，将无法很好地扩展。

我们暂时把作为路由目标的函数称为请求处理程序。现在我们不要急着来开发路由模块，因为如果请求处理程序没有就绪的话，再怎么完善路由模块也没有多大意义。

应用程序需要新的部件，因此加入新的模块 -- 已经无需为此感到新奇了。我们来创建一个叫做requestHandlers的模块，并对于每一个请求处理程序，添加一个占位用函数，随后将这些函数作为模块的方法导出：
*/
/*
服务器，请求路由以及请求处理程序都已经完成了，下面让我们按照此前的用例给网站添加交互：用户选择一个文件，上传该文件，然后在浏览器中看到上传的文件。 为了保持简单，我们假设用户只会上传图片，然后我们应用将该图片显示到浏览器中。

分为如下两步： 首先，让我们来看看如何处理POST请求（非文件上传），之后，我们使用Node.js的一个用于文件上传的外部模块。之所以采用这种实现方式有两个理由。

第一，尽管在Node.js中处理基础的POST请求相对比较简单，但在这过程中还是能学到很多。 
第二，用Node.js来处理文件上传（multipart POST请求）是比较复杂的，它不在本书的范畴，但，如何使用外部模块却是在本书涉猎内容之内。
*/
function start(response){
  	console.log("Request handler 'start' was called.");

	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content = "text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" method="post">'+
		'<textarea name="text" rows="20" cols="60"></textarea>'+
		'<input type="submit" value="Submit text" />'+
		'</form>'+
		'</body>'+
		'</html>';

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body)
    response.end()
}

function upload(response){
	  console.log("Request handler 'upload' was called.");
	  response.writeHead(200,{"Content-Type":"text/plain"});
	  response.write("Hello Upload");
	  response.end();
}

exports.start = start;
exports.upload = upload;

