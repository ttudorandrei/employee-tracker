const mysql = require("mysql");

const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_tracker_db",
};

const connection = mysql.createConnection(dbOptions);

const viewAllRolesFromDb = () => {
  return new Promise((resolve, reject) => {
    const handleQuery = (err, rows) => {
      if (err) reject(err);
      console.log("This is a table presenting all the roles");
      resolve(rows);
    };

    connection.query("SELECT * FROM employee_tracker_db.roles", handleQuery);
  });
};

module.exports = {
  viewAllEmployeesFromDb,
  viewAllDepartmentsFromDb,
  viewAllRolesFromDb,
};
