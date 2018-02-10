/*
作者：阿振_sc
链接：https://www.jianshu.com/p/91b41db5736c
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

/*
让我们继续扩展一下上面的Web程序。我们可以设定一个目录，然后让Web程序变成一个文件服务器。
要实现这一点，我们只需要解析request.url中的路径，然后在本地找到对应的文件，把文件内容发送出去就可以了。

解析URL需要用到Node.js提供的url模块，它使用起来非常简单，通过parse()将一个字符串解析为一个Url对象：
*/
/*
'use strict';
var url =require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
*/

/*
//处理本地文件目录需要使用Node.js提供的path模块，它可以方便地构造目录：
'use strict';
var path = require('path');
// 解析当前目录:
var workDir = path.resolve('.'); 
// '/Users/michael'
// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
// '/Users/michael/pub/index.html'
*/

/*
file_server.js文件服务器
*/
'use strict';
var fs = require('fs'),
	url = require('url'),
	path = require('path'),
	http = require('http');

// 从命令行参数获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' + root);

// 创建服务器
var server = http.createServer(function(request, response){
	// 获得URL的path，类似'/css/bootstrap.css':
	var pathname = url.parse(request.url).pathname;

	// 获得对应的本地文件路径，类似'/src/www/css/bootstrap.css':
	var filepath = path.join(root, pathname);

	// 获取文件状态
	fs.stat(filepath, function(err, stats){
		if(!err && stats.isFile()){
			// 没有出错并且文件存在：
			console.log('200' + request.url);
			// 发送200相应：
			response.writeHead(200);
			// 将文件流导向response：
			fs.createReadStream(filepath).pipe(response);
		}
		else{
			// 出错了或者文件不存在
			console.log('404' + request.url);
			// 发送404响应
			response.writeHead(404);
			response.end('404 Not Found！');
		}
	});
});

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080');

