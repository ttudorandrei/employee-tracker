// dependencies
const mysql = require("mysql");

// object containing our connection setup
const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_tracker_db",
};

// we create a connection using the object containing all of our connection data (port, host, password, database and user)
const connection = mysql.createConnection(dbOptions);

// If the connection is unsuccessful, the code below will throw an error, else will execute whatever code we choose to put there;
const onConnect = (err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  // this will end
  connection.end();
};

// this will try and connect accepting a callback
connection.connect(onConnect);
