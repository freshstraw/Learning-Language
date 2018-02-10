//首先使用严格模式来规范文件
'use strict';
//引入net核心模块
const net = require('net');
//创建服务器socket对象
let socketServer = net.createServer();

//开启服务器
socketServer.on('connection', function(socket){
    //作为测试是否有客户连接
    console.log('有客户连接上来了');
    //当创建连接后就输出下面的文本
    socket.write('主人，您有什么吩咐呢？（如有需要请喊help）')

    //当客户有数据发送过来，触发下面的事件
    socket.on('data', function(content){
        //处理用户发送过来的信息
        var msg = content.toString().trim();
        //判断用户输入的内容
        if (msg != ""){
            switch(msg){
                case '你好!':
                  socket.write('主人，你好哇！有什么需要帮助的吗？');
                  break;
                case '你在干嘛呢？':
                  socket.write('我在和你说话啊，/斜眼笑');
                  break;
                case 'help':
                  socket.write('/"您可以输入 你好！ 或者 你在干嘛呢?"');
                  break;
                default:
                  socket.write('唉！不清楚您在说什么呢');
                  break;;
            }
        }
    });

    //处理异常
    socket.on('error', function(msg){
        console.log(msg);
        console.log("客户掉线了");
    });
});

//进行监听
socketServer.listen(8088, '127.0.0.1', function(){
    console.log("服务起开始监听了......");
});

