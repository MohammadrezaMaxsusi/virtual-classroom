var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "maxsusi",
  password: "2783@Rtda"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});