//stream续写：解压文件
var  fs = require("fs");
var zlib = require('zlib');

//解压input.txt.gz文件为inpur.txt
fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input.txt'));
console.log("文件解压完成。");