//引入events模块
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected(){
	console.log('连接成功！');
	
	//触发data_receiver事件
	eventEmitter.emit('data_received');
}

//绑定connection事件处理程序
eventEmitter.on('connection', connectHandler);

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received', function(){
	console.log('数据接收成功！');
});

//触发connection事件
eventEmitter.emit('connection');

console.log('程序执行完毕。')

/*
Node应用程序是如何工作的：
在Node应用程序中，执行一步操作的函数将回调函数作为最后一个参数，回调函数接收错误对象作为第一个参数。
*/
var fs = require("fs");

//fs.readFile()是异步函数用于读取文件。如果在读取文件过程中发生错误，
//错误err对象就会输出错误信息。如果没发生错误，readFile跳过err对象的输出，文件内容就通过回调涵涵素输出。
fs.readFile('input.txt', function(err, data){
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log("程序执行完毕!");