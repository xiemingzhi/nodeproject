#!/usr/bin/env node
//npm install curlrequest
var curl = require('curlrequest');
//https://en.wikipedia.org/api/rest_v1/#!/Page_content/get_page_title
//var options = { url: 'https://en.wikipedia.org/api/rest_v1/page/title/'};
//https://developer.github.com/v3/guides/traversing-with-pagination/
//curl -i https://api.github.com/users/mozilla/repos
var options = { url: 'https://api.github.com/users/mozilla/repos', include: true };
var fullUrlList = [];
curl.request(options, function (err, parts) {
//console.log(parts);
var re = /^(\r\n)/;
    parts = parts.split(re);
	console.log(parts);
    //var data = parts.pop()
    //  , head = parts.pop();
	//var head = parts[0];
    //console.log(head);
    //console.log(data);
});


