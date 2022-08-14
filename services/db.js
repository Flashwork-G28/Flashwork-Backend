const mysql = require("mysql");
const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'flashwork',
    port: "3308",
});

// conn.connect(); //just for  create Connected

conn.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = conn;