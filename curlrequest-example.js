#!/usr/bin/env node
//npm install curlrequest
var curl = require('curlrequest');
//https://en.wikipedia.org/api/rest_v1/#!/Page_content/get_page_title
//var options = { url: 'https://en.wikipedia.org/api/rest_v1/page/title/'};
//https://developer.github.com/v3/guides/traversing-with-pagination/
//include response headers
//curl -i https://api.github.com/users/mozilla/repos
var options = { url: 'https://api.github.com/users/mozilla/repos', include: true };
var fullUrlList = [];
curl.request(options, function (err, parts) {
    parts = parts.split('\r\n');
    var data = parts.pop()
      , head = parts.pop();
    console.log(data);
});


