#!/usr/bin/env node

const fs = require('fs');

fs.readFile('./github-mozilla-repos-short.txt', 'utf8', (err, data) => {
    if (err) throw err;
    //console.log(data);
    parts = data;
    parts = parts.split('\r\n');
	console.log("part length " + parts.length);
	//console.log(parts);
    var data = parts.pop()
      , head = parts.pop();
	//console.log(data);//json data no crlf at end of file
	//console.log(head);//empty
	console.log("after pop length " + parts.length);
	//console.log(parts);
	var headerMap = new Map();
	for (var index in parts) {
		var str = parts[index];
		str = str.split(/:(.*)/);
		//console.log(str);
		if (str[1] != undefined) {
			headerMap.set(str[0], (str[1]).trim());
			//console.log(str[0] + ";;;" + (str[1]).trim());
		}
	}
	console.log("headerMap size " + headerMap.size);
	console.log(headerMap.get('Link'));
});

var test = 'HTTP/1.1 200 OK'
//var test = 'Server: GitHub.com';
//var test = 'Date: Tue, 11 Jul 2017 09:16:37 GMT';
test = test.split(/:(.*)/);
if (test[1] != undefined) {
	console.log(test[0]);//Date
	console.log((test[1]).trim());//Tue, 11 Jul 2017 09:16:37 GMT
}