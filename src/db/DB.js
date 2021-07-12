// dependencies
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

  vieEmployeesAndRoles = () => {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log("This is a table presenting the employees and their roles");
        resolve(rows);
      };

      this.connection.query(
        "SELECT employees.first_name, employees.last_name, roles.title FROM employees LEFT JOIN roles ON employees.role_id=roles.id_roles",
        handleQuery
      );
    });
  };

  // this allows the user to add a new department
  addNewEmployee = (answer) => {
    const { employeeFirstName, employeeLastName, employeeRole, hasManager } =
      answer;
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(
          `You have successfully added ${employeeFirstName} ${employeeLastName} as a new employee`
        );
        resolve(rows);
      };

      // if manager id is typed in, it will be added to the table, else it will be declared as a null field
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

  // this allows the user to add a new department
  addNewDepartment = (answer) => {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(
          `You have successfully added a new department: ${answer.newDepartmentName}`
        );
        resolve(rows);
      };

      this.connection.query(
        "INSERT INTO departments (name) VALUE (?)",
        answer.newDepartmentName,
        handleQuery
      );
    });
  };

  // this allows the user to add a new role
  addNewRole = (answer) => {
    const { newRoleName, salaryValue, newRoleDepartmentId } = answer;
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(
          `You have successfully added a new role: ${newRoleName} that pays ${salaryValue} and has an id of ${newRoleDepartmentId}.`
        );
        resolve(rows);
      };

      this.connection.query(
        "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
        [newRoleName, salaryValue, newRoleDepartmentId],
        handleQuery
      );
    });
  };

  // this allows the user to update the employee role
  updateEmployeeRole = (answers) => {
    const { choiceEmployeeFirstName, choiceEmployeeLastName, newRoleId } =
      answers;

    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(
          `You have successfully modified the role that ${choiceEmployeeFirstName} ${choiceEmployeeLastName} has.`
        );
        resolve(rows);
      };

      this.connection.query(
        "UPDATE employees SET role_id=? WHERE first_name=? AND last_name=?",
        [newRoleId, choiceEmployeeFirstName, choiceEmployeeLastName],
        handleQuery
      );
    });
  };

  // this allows the user to remove an employee and all of its associated data
  removeEmployee = (answer) => {
    const { employeeToRemoveFirstName, employeeToRemoveLastName } = answer;

    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(
          `You have successfully removed ${employeeToRemoveFirstName} ${employeeToRemoveLastName} from the database.`
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

  // this allows the user to remove an employee an all of its associated data
  removeDepartment = (answer) => {
    const { specificDepartmentRemove } = answer;
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(
          `You have successfully removed the ${answer} department from the database.`
        );
        resolve(rows);
      };

      this.connection.query(
        "DELETE FROM departments WHERE name=?",
        specificDepartmentRemove,
        handleQuery
      );
    });
  };

  // this allows the user to remove a role and all of its associated data
  removeRole = (answer) => {
    const { specificRoleRemove } = answer;

    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log(
          `You have successfully removed ${specificRoleRemove} from the database.`
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

// this exports the Db class
module.exports = Db;
