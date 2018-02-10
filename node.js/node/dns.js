var dns = require('dns');

/*dns.lookup('www.github.com', function onLookup(err, address, family){
	console.log('ip 地址:', address);
	dns.reverse(address, function(err, hostnames){
		if (err){
			console.log(err.stack);
		}
		console.log('反向解析' + address + ':' + JSON.stringify(hostnames));
	});
});*/

var dns = require('dns');

dns.lookup('www.2345.com', function onLookup(err, address, family) {
   console.log('ip 地址:', address);
   dns.reverse(address, function (err, hostnames) {
   if (err) {
      console.log(err.stack);
   }

   console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
});  
});