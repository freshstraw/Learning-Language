/*
简单服务器交互练习，引用"net"模块
*/

//首先使用严格模式来规范文件
"use strict";
//引入net核心模块
const net = require("net");
//创建服务器socket对象
let socketServer = net.createServer();

//开启服务器
socketServer.on("connection",(socket)=>{
    console.log("有客户连接上来了");  //作为测试是否有客户连接
    //当创建连接后就输出下面的文本
    socket.write("主人，小丫随时恭候，为您提供最优质的服务！");

    //当客户端有数据发送过来，触发下面的事件
    socket.on("data",(content)=>{
        //处理用户发送来的信息
        var msg = content.toString().trim();
        //判断用户输入的内容
        if(msg != ""){
            switch(msg){
                case "你好！":
                   socket.write("主人，你好！有什么能够帮助到您的吗？");
                   break;
                case "早上好！":
                   socket.write("good morning！");
                   break;
                case "你好笨哎！":
                   socket.write("主人，我允许你说我笨，但是你不可以侮辱我的智商。");
                   break;
                case "你傻不傻呀？":
                   socket.write("主人说我傻我就傻。但是，主人，你忍心说我傻吗？");
                   break;
                case "早餐要吃什么呢？":
                   socket.write("主人，你喜欢哟！不过记得要吃有营养的早餐呀！");
                   break;
                case "午餐吃什么呢？":
                   socket.write("主人，你可以选择吃饭的哟。");
                   break;
                case "晚餐吃什么呢？":
                   socket.write("主人，你好烦哎！");
                   break;
                default:
                   socket.write("不知道你在说什么");
                   break;
            }   
        }
    });
    //处理异常
    socket.on("error",()=>{
        console.log("客户掉线");
    });
});

//进行监听
socketServer.listen(8088,'127.0.0.1',()=>{
    console.log("服务器已经开始");
})

