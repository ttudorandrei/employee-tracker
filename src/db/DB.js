// dependencies
const mysql = require("mysql");
const init = require("../utils/init");

class Db {
  constructor(database) {
    // object containing our connection setup
    const dbOptions = {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database,
    };
    // we create a connection using the object containing all of our connection data (port, host, password, database and user)
    this.database = database;
    this.connection = mysql.createConnection(dbOptions);
  }
  start() {
    return new Promise((resolve, reject) => {
      const onConnect = (err) => {
        if (err) reject(err);
        console.log(
          `Connection to ${this.database} database was successful with id ${this.connection.threadId}`
        );
        resolve();
      };
      this.connection.connect(onConnect);
    });
  }

  end(message) {
    this.connection.end();
    console.log(
      message || `Connection to ${this.database} has been successfully closed.`
    );
  }

  viewAllEmployeesFromDb() {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log("This is a table presenting all the employees");
        resolve(rows);
      };

      this.connection.query(
        "SELECT * FROM employee_tracker_db.employees",
        handleQuery
      );
    });
  }

  viewAllDepartmentsFromDb = () => {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log("This is a table presenting all the departments");
        resolve(rows);
      };

      this.connection.query(
        "SELECT * FROM employee_tracker_db.departments",
        handleQuery
      );
    });
  };

  viewAllRolesFromDb = () => {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log("This is a table presenting all the roles");
        resolve(rows);
      };

      this.connection.query(
        "SELECT * FROM employee_tracker_db.roles",
        handleQuery
      );
    });
  };

  deleteAll() {}

  deleteOne() {}

  insert() {}

  update() {}
}

module.exports = Db;
