							//创建第一个实例
//引入required模板,我们可以使用require指令来载入Node.js模板。
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
//创建服务器
const server = http.createServer((req, res) => {
	//发送HTTP头部
	//HTTP状态值：200:OK
	//内容类型:text/plain
	//response.writeHead(200, {'content-Type':'text/plain'});分开写如下
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	//发送响应数据"Hello World"
	res.end('Hello World\n');
});
//终端打印如下信息
server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});

//分析Node.js的HTTP服务器:
/*
第一行请求(require)Node.js自带的http模块，并且把它赋值给http变量。
接下来我们调用http模块提供的涵涵素：CreateServer。这个函数会返回一个对象,这个对象有一个叫做listen的方法，这个方法有一个数值参数,指定这个HTTP服务器监听的端口号。  
 */
				
				
							//node.js(交互式解释器)
//Node.js REPL(Real Eval Print Loop:交互式解释器)表示一个电脑的环境，类似window系统的终端或Unix/Linux shell,我们可以在终端输入命令，并接受系统的响应。
//Node自带了交互式解释器，可以执行以下任务:
/*
读取：读取用户输入，解析输入了JavaScript数据结构兵存储在内存中。
执行：执行输入的数据结构
打印：输出结果
循环：循环操作以上步骤直到用户两次按下ctrl-c按钮退出
使用变量：你可以将数据存储在变量中，并在你需要的时候使用它。
变量声明需要使用var关键字，如果没有使用var关键字变量会直接打印出来。
使用var关键字的变量可以使用console.log()来输出变量。

REPL命令:
	ctrl + c -退出当前终端
	ctrl + c按下两次 -退出Node REPL
	ctrl + d -退出Node REPL
	向上/向下按键			-查看输入的历史命令
	tab按键					-列出当前命令
	.help					-列出使用命令
	.break					-退出多行表达式
	.clear 					-退出多行表达式
	.save filename			-保存当前的Node REPL会话到指定文件
	.load filename			-载入当前Node REPL会话的文件内容
*/
 
 
							//Node.js回调函数
/*
Node.js 异步编程的直接体现就是回调。
异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。
例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。
参照main.js实例
*/						


							//Node.js 事件循环
/*
Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
// 触发事件
eventEmitter.emit('eventName');
参照event.js实例
*/


							//Node.js Stream(流)
/*
Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
Node.js Stream有四种流类型:
	Readable -可读操作
	Writable -可写操作
	Duplex	 -可读可写操作
	Transform -操作被吸入数据，然后读出结果。
所有的Stream对象都是EventEmitter的实例。常用事件有:
	data 	-当有数据可读时触发。
	end		-没有更多的诗句可读时触发。
	error	-在接收和写入过程中发生错误时触发。
	finish	-所有数据已被写入到底层系统时触发。
参照stream.js + gunzip.js
*/


							//Node.js 模块系统(module)
/*
为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
Node.js 提供了exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
参照module.js + hello.js
*/


							//Node.js 函数
/*
在JavaScript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。
参照function.js
*/


							//Node.js 路由
/*
我们要为路由提供请求的URL和其他需要的GET及POST参数，随后路由需要根据这些数据来执行相应的代码。
因此，我们需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数。这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。
我们需要的所有数据都会包含在request对象中，该对象作为onRequest()回调函数的第一个参数传递。但是为了解析这些数据，我们需要额外的Node.JS模块，它们分别是url和querystring模块。
                   url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]
参考indes.js + server.js + route.js
*/


							//Node.js全局对象
/*
JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。
在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。
在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

注意： 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险

__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
*/


							//Node.js GET/POST请求
/*
表单提交到服务器一般都使用GET/POST请求。
本章节我们将为大家介绍 Node.js GET/POST请求。
*/
