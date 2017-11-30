var cassandra = require('cassandra-driver');

var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'contactdbs'});

var randomEmail = require('random-email');
var randomstring = require("randomstring");

console.time("dbinsert");
for (i=1; i<100; i++) {
  var email = randomEmail();
  console.log(email);
  var name = randomstring.generate({
    length: 12,
    charset: 'alphabetic'
  });
  console.log(name);
client.execute("INSERT INTO contact (email, firstname, lastname) VALUES ('"+email+"', '"+name+"',  '"+name+"')",
        function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
}
console.timeEnd("dbinsert");
