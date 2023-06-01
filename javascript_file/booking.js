const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const querystring = require('querystring');

// Create a MySQL connection

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "mysql1234",
  database:"booking"
});


// Connect to the MySQL server
connection.connect(function (err) {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

http.createServer(function (req, res) {
  var data1 = '';

  req.on('data', function (chunk) {
    console.log(chunk);
    data1 += chunk;
  });

  req.on('end', async () => {
    const query = querystring.parse(data1);
    console.log(query);

    const data = {
      fname: query["fname"],
      lname: query["lname"],
      email: query["email"],
      city: query["city"],
      address: query["address"],
      state: query["state"],
      pincode: query["pincode"],
      mobileno: query["mobileno"],
      dress: query["dress"],
      qty: query["qty"],
      size: query["size"],
      pay: query["pay"],
    };

    // Insert data into MySQL table
    connection.query('INSERT INTO users SET ?', data, function (err, result) {
      if (err) {
        console.error('Error inserting data into MySQL: ' + err.stack);
        return;
      }
      console.log('Data inserted into MySQL with id ' + result.insertId);
      res.writeHead(200,{"Content-Type":"text/html"})
      res.write("<H1><center> Hi Your Order Have been Placed!!!</center></H1>");
      res.end();
    });
  });
}).listen(3000);

console.log('Server has Started.......');
