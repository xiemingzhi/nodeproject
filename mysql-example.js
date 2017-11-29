var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "contactdbs"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM contact", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
