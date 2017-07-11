#!/usr/bin/env node
//npm install cli
//./cli-example.js -u http://www.yahoo.com

var cli = require('cli'), options = cli.parse({
	url: ['u', 'url to process', 'string', 'http://www.google.com/']
});

console.log(options.url);
