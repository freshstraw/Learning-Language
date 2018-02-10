//异步读取
'use strict';
var fs = require('fs');
fs.readFile('example.txt', 'utf-8', function (err, data) { 
  if (err) { 
    console.log(err); 
  } else { 
    console.log(data); 
  }
});


'use strict';
var fs = require('fs');
fs.readFile('1.jpg', function (err, data) { 
  if (err) { 
    console.log(err); 
  } else { 
    console.log(data); 
    console.log(data.length + ' bytes'); 
  }
});

//同步读取
'use strict';
var fs = require('fs');
var data = fs.readFileSync('example.txt', 'utf-8');
console.log(data);

//同步一场捕获
try { 
  var data = fs.readFileSync('sample.txt', 'utf-8'); 
  console.log(data);
} catch (err) { 
  // 出错了
}

