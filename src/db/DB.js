// dependencies
const inquirer = require("inquirer");
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

  addNewEmployee = (answer) => {
    const { employeeFirstName, employeeLastName, employeeRole, hasManager } =
      answer;
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(`You have successfully added a new employee`);
        resolve(rows);
      };

      this.connection.query(
        "INSERT INTO employees (first_name, last_name, role_id) VALUE (?, ?, ?)",
        [employeeFirstName, employeeLastName, employeeRole],
        function (err, result) {
          if (err) throw err;
        },
        handleQuery
      );

      if (hasManager) {
        this.connection.query(
          "UPDATE employees SET manager_id=? WHERE first_name=? AND last_name=?",
          [hasManager, employeeFirstName, employeeLastName],
          function (err, result) {
            if (err) throw err;
            console.log(
              `Employee ${employeeLastName}, ${employeeFirstName} was successfully added to the database!`
            );
          }
        );
      }
      handleQuery;
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
        },
        handleQuery
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

  updateEmployeeRole = () => {
    // //////////////////////////////////////////////
    return new Promise(async (resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(`You have successfully updated an employee role!`);
        resolve(rows);
      };

      // get all employees
      const employeeQuery = "SELECT * FROM employees";
      const employeesList = await this.connection.query(employeeQuery);

      const employeeChoices = (employees) => {
        return employees.map((employee) => {
          const { first_name, last_name } = employee;
          return [
            {
              name: first_name,
              value: "firstName",
            },
            {
              name: last_name,
              value: "lastName",
            },
          ];
        });
      };

      const answers = await inquirer.prompt(
        {
          type: "list",
          message: "Which employee would you like to update?",
          choices: employeeChoices(employeesList),
          name: "employeeChoice",
        },
        {
          type: "input",
          message:
            "Please type in the role id you want to attribute to the employee",
          name: "newRoleId",
        }
      );

      this.connection.query(
        "UPDATE employees SET role_id=? WHERE firstName=? AND lastName=?",
        answers.newRoleId,
        answers.newRoleId,
        answers.employeeChoice,
        function (err, result) {
          if (err) throw err;
        },
        handleQuery
      );
    });

    // ///////////////////////////////////////

    // prompt user to choose which employee he wants to update role for
    // question choices should be an array made of the list of employees
    // update role for chosen employee
  };
}

module.exports = Db;
