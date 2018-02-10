/*
本部分实例练习内容取自大牛博客:http://ourjs.com/detail/529ca5950cb6498814000005

现在我们来创建一个用于启动我们的应用的主文件，和一个保存着我们的HTTP服务器代码的模块。

在我的印象里，把主文件叫做index.js或多或少是个标准格式。把服务器模块放进叫server.js的文件里则很好理解。

让我们先从服务器模块开始。在你的项目的根目录下创建一个叫server.js的文件
*/
var http = require("http"),
	url = require("url");

function start(route, handle){
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for "+ pathname +" received.");

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8083);
  console.log("Server has started.");
}

exports.start = start;

