/*
Node.js内置的fs模块就是文件系统模块，负责读写文件。
和所有其它JavaScript模块不同的是，fs模块同时提供了异步和同步的方法。

回顾一下什么是异步方法。因为JavaScript的单线程模型，执行IO操作时，JavaScript代码无需等待，而是传入回调函数后，继续执行后续JavaScript代码。比如jQuery提供的getJSON()操作：

同步操作的好处是代码简单，缺点是程序将等待IO操作，在等待时间内，无法响应其它任何事件。而异步读取不用等待IO操作，但代码较麻烦。
*/
var $ = require('jquery')(require("jsdom").jsdom().defaultView);
$("body").append("<div>TEST</div>");
console.log($("body").html());

// $.getJSON('http://example.com/ajax', function(data){
// 	console.log('IO结果返回后执行...');
// });
// console.log("不等待IO结果直接执行后续代码...");

