//从流中读取数据
var fs = require("fs");
var data = '';

//创建可读流
var readerStream = fs.createReadStream("input.txt");

//设置编码为 utf8
readerStream.setEncoding('UTF8');

//处理流事件 --data, end, and error
readerStream.on('data', function(chunk){
	data += chunk;
});

readerStream.on('end', function(){
	console.log(data);
});

readerStream.on('error', function(err){
	console.log(err.stack);
});
console.log("程序执行完毕！")


//写入流
var fs = require("fs");
var data = '要写入文件了...';

//创建一个可以写入的流，写入到文件output.txt中
var writeStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writeStream.write(data, 'UTF8');

//标记文件末尾
writeStream.end();

//处理流事件  -->data, end, and error
writeStream.on('finish', function(){
	console.log("写入完成!");
});

writeStream.on('error', function(err){
	console.log(err.stack);
});
console.log("程序执行完毕。");


//管道流
/*[管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中]*/
//创建一个可读流
var readerStream = fs.createReadStream('input.txt');

//创建一个可写流
var writeStream = fs.createWriteStream('output.txt');

//管道读写操作
//读取input.txt文件内容，并将内容写入到output.txt文件中
readerStream.pipe(writeStream);
console.log("管道流执行完毕。");


//链式流
/*
链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
接下来我们就是用管道和链式来压缩和解压文件。
*/
var fs = require("fs");
var zlib = require("zlib");

//压缩input.txt文件为input.txt.gz
fs.createReadStream("input.txt")
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));
console.log("文件压缩完成。");

