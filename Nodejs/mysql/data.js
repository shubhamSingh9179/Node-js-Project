var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : "construction"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("create table emp(Id int(10),Name varchar(20),age int(2),Adress varchar(20),mobile_no varchar(10))", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});