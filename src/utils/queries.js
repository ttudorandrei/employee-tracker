const mysql = require("mysql");

const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_tracker_db",
};

const connection = mysql.createConnection(dbOptions);

const displayTable = (data) => {
  console.table(data);
};

const viewAllEmployeesFromDb = () => {
  return new Promise((resolve, reject) => {
    const handleQuery = (err, rows) => {
      if (err) reject(err);
      console.log("This is a table presenting all the employees");
      resolve(rows);
    };

    connection.query(
      "SELECT * FROM employee_tracker_db.employees",
      handleQuery
    );
  });
};

const viewAllDepartmentsFromDb = () => {
  return new Promise((resolve, reject) => {
    const handleQuery = (err, rows) => {
      if (err) reject(err);
      console.log("This is a table presenting all the departments");
      resolve(rows);
    };

    connection.query(
      "SELECT * FROM employee_tracker_db.departments",
      handleQuery
    );
  });
};

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
