/*
1.MD5和SHA1

MD5是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示：
*/
const crypto = require('crypto');
const hash = crypto.createHash('md5');
// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');
console.log(hash.digest('hex')); 
// 7e1977739c748beac0c0fd14fd26a544
//update()方法默认字符串编码为UTF-8，也可以传入Buffer。

//如果要计算SHA1，只需要把'md5'改成'sha1'，就可以得到SHA1的结果

/*
1f32b9c9932c02227819a4151feed43e131aca40
还可以使用更安全的sha256和sha512。
*/
