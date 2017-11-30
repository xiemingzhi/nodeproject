var cassandra = require('cassandra-driver');

var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'contactdbs'});

client.execute("SELECT  email, firstname, lastname FROM contact", function (err, result) {
            if (!err){
                if ( result.rows.length > 0 ) {
                    var user = result.rows[0];
                    console.log("firstname = %s, email = %s", user.firstname, user.email);
                } else {
                    console.log("No results");
                }
            }
        });
