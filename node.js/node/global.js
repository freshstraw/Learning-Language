//1.__filename 表示当前正在执行的脚本的文件名。
console.log( __filename );

//2.__dirname 表示当前执行脚本所在的目录。
console.log( __dirname );

//setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
function printHello(){
	console.log("Hello, World!");
}
var t = setTimeout(printHello, 2000);

//clearTimeout(t)
//全局函数用于停止一个之前通过 setTimeout()创建的定时器。参数t通过setTimeout()函数创建的定时器。
clearTimeout(t);

//setInterval(cb, ms)
/*setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。*/
var IntTimer = setInterval(printHello, 2000);
clearInterval(IntTimer)

//console打印信息
//console.time()输出时间，表示计时开始，console.timeEnd()结束时间，表示计时结束。
console.time("获取数据");
var y = 1;
do{
	console.log(y);
	y ++;
}while(y<10);
console.timeEnd("获取数据");

