var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "mycontact",
  password: "mycontact",
  database: "contactdbs"
});

var randomEmail = require('random-email');
var randomstring = require("randomstring");

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  console.time("dbinsert");
  for (i=1; i<100; i++) {
    var email = randomEmail();
    console.log(email);
    var name = randomstring.generate({
      length: 12,
      charset: 'alphabetic'
    });
    console.log(name);
    var sql = "INSERT INTO contact (email, firstName, lastName) VALUES ('" + email + "', '" + name + "', '" + name + "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  }
  console.timeEnd("dbinsert");
});
