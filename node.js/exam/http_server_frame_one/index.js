/*
本部分实例练习内容取自大牛博客:http://ourjs.com/detail/529ca5950cb6498814000005

用户可以通过浏览器使用我们的应用。
当用户请求http://domain/start时，可以看到一个欢迎页面，页面上有一个文件上传的表单。
用户可以选择一个图片并提交表单，随后文件将被上传到http://domain/upload，该页面完成上传后会把图片显示在页面上。

我们来分解一下这个应用，为了实现上文的用例，我们需要实现哪些部分呢？

我们需要提供Web页面，因此需要一个HTTP服务器
对于不同的请求，根据请求的URL，我们的服务器需要给予不同的响应，因此我们需要一个路由，用于把请求对应到请求处理程序（request handler）
当请求被服务器接收并通过路由传递之后，需要可以对其进行处理，因此我们需要最终的请求处理程序
路由还应该能处理POST数据，并且把数据封装成更友好的格式传递给请求处理入程序，因此需要请求数据处理功能
我们不仅仅要处理URL对应的请求，还要把内容显示出来，这意味着我们需要一些视图逻辑供请求处理程序使用，以便将内容发送给用户的浏览器
最后，用户需要上传图片，所以我们需要上传处理功能来处理这方面的细节
*/

//1.创建 index.js 文件并写入以下内容：
var server = require('./server'),
	router = require('./router'),
	requestHandlers = require('./request_handlers');

	var handle = {};
	handle['/'] = requestHandlers.start;
	handle['/start'] = requestHandlers.start;
	handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);

