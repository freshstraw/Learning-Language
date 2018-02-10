/*
如果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，
它返回一个Stat对象，能告诉我们文件或目录的详细信息：

//新写一个文件
'use strict';
var fs = require('fs');
var data = 'Hello, Node.js, I know you!';
fs.writeFileSync('example.txt', data);
*/

//异步获取
'use strict';
var fs = require('fs');
fs.stat('example.txt', function (err, stat) { 
  if (err) { 
    console.log(err); 
  } else { 
    // 是否是文件: 
    console.log('isFile：' + stat.isFile()); 
    // 是否是目录: 
    console.log('isDirectory：' + stat.isDirectory()); 
    if (stat.isFile()) { 
      // 文件大小: 
      console.log('size：' + stat.size); 
     // 创建时间, Date对象: 
      console.log('birth time：' + stat.birthtime); 
      // 修改时间, Date对象: 
      console.log('modified time：' + stat.mtime); 
    } 
  }
});

//同步获取
'use strict';
var fs = require('fs');
var data = fs.statSync('example.txt')
//是否是文件
console.log('isFile：' + data.isDirectory());
//是否是目录
console.log('isDirectory：' + data.isDirectory());
if(data.isFile()){
	//文件大小
	console.log('size:' + data.size);
	//创建时间，Date对象
	console.log('birth time：' + data.birthtime);
	//修改时间，Date对象
	console.log('modified time：' + data.mtime);
};

