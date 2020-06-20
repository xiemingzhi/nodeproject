/*
Use docker to start mysql
 docker run --name test-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_DATABASE=oic -e MYSQL_USER=oic -e MYSQL_PASSWORD=oic -p 3306:3306 -d mysql:5.7

Create schema 
student(sid, sname, sage, address) 
teacher(tid, tname, tage, office#) 
course(cid, ctitle, credit) 
take(cid, tid, sid, score)

Import data
 docker exec -i test-mysql mysql -h192.168.99.100 -uoic -poic oic < schooltest-dump.sql 

*/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.99.100",
  user: "oic",
  password: "oic",
  database: "oic"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("select sname from student where sid in (select sid from take where tid in (select tid from teacher where tage >= 60))", function (err, result, fields) {
    if (err) throw err;
    console.log(result); //[{sname: "john"}, {sname: "mary"}]
    for (rec of result) {
        console.log('name is', rec.sname);
    }
  });
});
