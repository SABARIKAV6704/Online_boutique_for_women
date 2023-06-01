const mysql = require('mysql2');

// Database connectivity configuration
var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "mysql1234",
    database:"booking"
  });

// Connect to the MySQL server
connection.connect((err) => {
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

    // Perform the database insert operation
    const query = 'INSERT INTO login (username, password) VALUES (?, ?)';
    connection.query(query, [username, password], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query: ' + err.stack);
        return;
      }

      // Redirect to success page
      console.log('Redirect to success page (login.html)');
    });
  }

  // Close the MySQL connection when finished
  connection.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection: ' + err.stack);
      return;
    }
    console.log('MySQL connection closed successfully.');
  });
});
