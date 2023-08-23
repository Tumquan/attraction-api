var express = require("express");
var cors = require("cors");
var app = express();
// get the client
const mysql = require("mysql2");
require('dotenv').config()
console.log(process.env)

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(cors());

app.get("/helloworld", function (req, res, next) {
  res.json({ msg: "Hello World!" });
});

app.get("/attractions", function (reg, res, next) {
  pool.query("SELECT * FROM attractions", function (err, rows, fields) {
    res.json(rows);
  });
});

app.listen(5000, function () {
  console.log("web server listening on port 5000");
});
