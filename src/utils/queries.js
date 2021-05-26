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
  const handleQuery = (err, rows) => {
    if (err) throw err;
    console.log("This is a table presenting all the employees");
    displayTable(rows);
  };

  connection.query("SELECT * FROM employee_tracker_db.employees", handleQuery);
};

const viewAllDepartmentsFromDb = () => {
  const handleQuery = (err, rows) => {
    if (err) throw err;
    console.log("This is a table presenting all the departments");
    displayTable(rows);
  };

  connection.query(
    "SELECT * FROM employee_tracker_db.departments;",
    handleQuery
  );
};

const viewAllRolesFromDb = () => {
  const handleQuery = (err, rows) => {
    if (err) throw err;
    console.log("This is a table presenting all the roles");
    displayTable(rows);
  };

  connection.query("SELECT * FROM employee_tracker_db.roles;", handleQuery);
};

module.exports = {
  viewAllEmployeesFromDb,
  viewAllDepartmentsFromDb,
  viewAllRolesFromDb,
};
