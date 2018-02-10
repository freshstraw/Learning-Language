//读取
'use strict';
var fs = require('fs');

//写一个txt文件
// var ws1 = fs.createWriteStream('example.txt', 'utf-8');
// ws1.write('hello boy\n');
// ws1.write('END.');
// ws1.end();

// 打开一个流:
var rs = fs.createReadStream('example.txt', 'utf-8');
rs.on('data', function (chunk) { 
  console.log('DATA:') 
  console.log(chunk);
});
rs.on('end', function () { 
  console.log('END');
});
rs.on('error', function (err) { 
  console.log('ERROR: ' + err);
});

