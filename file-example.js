#!/usr/bin/env node

const fs = require('fs');

fs.readFile('./github-mozilla-repos-short.txt', 'utf8', (err, data) => {
  if (err) throw err;
  //console.log(data);
  parts = data;
	parts = parts.split('\r\n');
	//console.log(parts);
});

//var test = 'Server: GitHub.com';
var test = 'Date: Tue, 11 Jul 2017 09:16:37 GMT';
test = test.split(':');
console.log(test[0]);
console.log((test[1]).trim());