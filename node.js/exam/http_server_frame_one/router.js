/*
我们仍然只拥有整个应用的最初部分：我们可以接收HTTP请求。但是我们得做点什么——对于不同的URL请求，服务器应该有不同的反应。

对于一个非常简单的应用来说，你可以直接在回调函数 onRequest() 中做这件事情。不过就像我说过的，我们应该加入一些抽象的元素，让我们的例子变得更有趣一点儿。

处理不同的HTTP请求在我们的代码中是一个不同的部分，叫做“路由选择”——那么，我们接下来就创造一个叫做 路由 的模块吧。

我们要为路由提供请求的URL和其他需要的GET及POST参数，随后路由需要根据这些数据来执行相应的代码（这里“代码”对应整个应用的第三部分：一系列在接收到请求时真正工作的处理程序）。

因此，我们需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数。这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。

我们需要的所有数据都会包含在request对象中，该对象作为onRequest()回调函数的第一个参数传递。但是为了解析这些数据，我们需要额外的Node.JS模块，它们分别是url和querystring模块。
*/

//现在我们可以来编写路由了，建立一个名为router.js的文件，添加以下内容：
function route(handle, pathname, response){
  console.log("About to route a request for "+ pathname);
  if(typeof handle[pathname]==='function'){
    handle[pathname](response);
  }else{
    console.log("No request handler found for "+ pathname);
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;

