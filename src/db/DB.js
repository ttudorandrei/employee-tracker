// dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");

// creates a class for handling all of the init functionality
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

  // function to connect to the db
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

  // function to end the connection to the db
  end(message) {
    this.connection.end();
    console.log(
      message || `Connection to ${this.database} has been successfully closed.`
    );
  }

  // this will return all the employees in the database. if the answer in put inside a console.table(), the information will be formatted in a table.
  viewAllEmployeesFromDb() {
    // this will execute a new promise. a callback function is needed
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        // if there is an error it will reject the query, otherwise it will execute it
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

  // this will return all the departments in the database. if the answer in put inside a console.table(), the information will be formatted in a table.
  viewAllDepartmentsFromDb = () => {
    // this will execute a new promise. a callback function is needed
    return new Promise((resolve, reject) => {
      // if there is an error it will reject the query, otherwise it will execute it
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

  // this will return all the roles in the database. if the answer in put inside a console.table(), the information will be formatted in a table.
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

  addNewEmployee = (answer) => {
    const { employeeFirstName, employeeLastName, employeeRole, hasManager } =
      answer;
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(`You have successfully added a new employee`);
        resolve(rows);
      };

      if (hasManager) {
        this.connection.query(
          "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUE (?, ?, ?, ?)",
          [employeeFirstName, employeeLastName, employeeRole, hasManager],
          handleQuery
        );
      } else {
        this.connection.query(
          "INSERT INTO employees (first_name, last_name, role_id) VALUE (?, ?, ?)",
          [employeeFirstName, employeeLastName, employeeRole],
          handleQuery
        );
      }
    });
  };

  addNewDepartment = (answer) => {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(`You have successfully added a new department`);
        resolve(rows);
      };

      this.connection.query(
        "INSERT INTO departments (name) VALUE (?)",
        answer.newDepartmentName,
        function (err, result) {
          if (err) throw err;
          console.log(
            `Department [${answer.newDepartmentName}] inserted into [departments] table`
          );
        }
        // handleQuery
      );
    });
  };

  addNewRole = (answer) => {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(`You have successfully added a new role`);
        resolve(rows);
      };

      this.connection.query(
        "INSERT INTO roles (title, salary) VALUES (?, ?)",
        [answer.newRoleName, answer.salaryValue],
        function (err, result) {
          if (err) throw err;
        },
        handleQuery
      );

      this.connection.query(
        "UPDATE roles SET department_id=? WHERE title=?",
        [answer.newRoleDepartmentId, answer.newRoleName],
        function (err, result) {
          if (err) throw err;
          console.log("Role inserted");
        },
        handleQuery
      );
    });
  };

  updateEmployeeRole = (answers) => {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(`You have successfully updated an employee role!`);
        resolve(rows);
      };

      this.connection.query(
        "UPDATE employees SET role_id=? WHERE firstName=? AND lastName=?",
        answers.newRoleId,
        answers.choiceEmployeeFirstName,
        answers.choiceEmployeeLastName,
        handleQuery
      );
    });
  };

  removeEmployee = (answer) => {
    const { employeeToRemoveFirstName, employeeToRemoveLastName } = answer;

    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(
          `You have successfully removed ${employeeToRemoveFirstName} ${employeeToRemoveLastName}`
        );
        resolve(rows);
      };

      this.connection.query(
        "DELETE FROM employees WHERE first_name=? AND last_name=?",
        [employeeToRemoveFirstName, employeeToRemoveLastName],
        handleQuery
      );
    });
  };

  removeDepartment = (answer) => {
    const { specificDepartmentRemove } = answer;
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(`You have successfully removed the ${answer} department`);
        resolve(rows);
      };

      this.connection.query(
        "DELETE FROM departments WHERE name=?",
        specificDepartmentRemove,
        handleQuery
      );
    });
  };

  removeRole = (answer) => {
    const { specificRoleRemove } = answer;

    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(
          `You have successfully removed ${specificRoleRemove} from roles table`
        );
        resolve(rows);
      };

      this.connection.query(
        "DELETE FROM roles WHERE title=?",
        specificRoleRemove,
        handleQuery
      );
    });
  };
}

module.exports = Db;
