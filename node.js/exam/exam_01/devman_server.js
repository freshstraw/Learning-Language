//这个实例还没有调通，需要了解下怎么引用socket.io

'use strict';
var http = require("http"), 
   fs = require("fs"), 
   path = require("path"), 
   url = require("url"); 
 
var server = http.createServer(function(req, res) { 
   var pathname = url.parse(req.url).pathname; 
   var filepath = path.join("/tmp", "wwwroot", pathname); 
   var stream = fs.createReadStream(filepath, {flags : "r", encoding : null}); 
   stream.on("error", function() { 
       res.writeHead(404); 
       res.end(); 
   }); 
   stream.pipe(res); 
}); 
server.on("error", function(error) { 
   console.log(error); 
}); 
server.listen(8088, "127.0.0.1");

/*
这个实例实现的功能是动态监测服务器的内存使用状态，即内存的占用率。获取服务器上的内存占用率比较简单，只需要使用 os 模块提供的方法即可，即 freemem()/totalmem() 。为了能够实时的监测内存占有率，服务器需要实时的把数据传输给浏览器端。这里最好的实现方式是 HTML 5 中引入的 WebSocket 规范。该规范在 Firefox 4 和 Google Chrome 等新浏览器上得到了支持。同时服务器端也需要支持此规范。Socket.IO 在 node.js 上提供了对 WebSocket 规范的支持，包括服务器端和浏览器端代码。代码清单 9 给出了使用 Socket.IO 的服务器端代码。
*/
//监测内存占用率的服务器端代码
var io = require('./socket.io'); 
var io = io.listen(server); 
io.on("connection", function(client){ 
   setInterval(function() { 
       client.send(os.freemem() / os.totalmem()); 
   }, 500); 
});

