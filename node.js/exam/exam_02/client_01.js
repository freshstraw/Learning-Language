'use strict';
const net = require('net');

//得到ip和端口
const ip = '127.0.0.1';
const port = 8088;

//建立链接
var socket = net.createConnection(port, ip, function(){
    console.log('已经链接上服务器了');
});

//监听服务器的数据
socket.on('data', function(content){
    console.log(`小小: ${content}`);
});

//在客户端添加一个输入事件
process.stdin.on('readable', function(){
    var msg = process.stdin.read();
    if(msg != null){
        //键输入的信息发送到服务器
        socket.write(msg);
    }
});

