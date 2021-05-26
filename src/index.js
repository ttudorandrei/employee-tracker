// dependencies
const Db = require("./db/DB");
const db = new Db("employee_tracker_db");

// If the connection is unsuccessful, the code below will throw an error, else will execute whatever code we choose to put there;
db.start();

// this will try and connect accepting a callback
