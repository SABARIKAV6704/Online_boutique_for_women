const mysql = require('mysql2');

// Database connectivity configuration
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "mysql1234",
  database:"booking"
});

// Connect to the MySQL server
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);

  // Check if the form is submitted
  if (process.env.REQUEST_METHOD === 'POST') {
    // Retrieve form data
    const username = process.env.username;
    const password = process.env.password;

    // Prepare and execute the query
    const query = 'SELECT * FROM login WHERE username = ? LIMIT 1';
    connection.query(query, [username], function(err, results) {
      if (err) {
        console.error('Error executing MySQL query: ' + err.stack);
        return;
      }

      if (results.length === 1) {
        const user = results[0];
        if (user.password === password) {
          // Password is correct, redirect to success page
          console.log('Redirect to success page (Homepage.html)');
          return;
        } else {
          // Invalid password
          console.log('Invalid password');
        }
      } else {
        // User not found
        console.log('User not found');
      }
    });
  }

  // Close the MySQL connection when finished
  connection.end(function(err) {
    if (err) {
      console.error('Error closing MySQL connection: ' + err.stack);
      return;
    }
    console.log('MySQL connection closed successfully.');
  });
});
