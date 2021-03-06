var fs = require("fs");

//阻塞情况
var data = fs.readFileSync('input.txt');
console.log(data.toString());
//读取完文件才执行下一段代码
console.log("程序执行结束!");

//非阻塞情况
fs.readFile('input.txt', function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});
//不需要等待文件读取完,这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。
console.log("程序执行结束！");
//因此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。