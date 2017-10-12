/**
 * 
 */
const https = require('https');
var options = {
  host: 'api.github.com',
  path: '/users/mozilla/repos',
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
};
https.get(options, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    //console.log(data);
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
