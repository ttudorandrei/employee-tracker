// dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");

const { questions, addEmployeeQuestions } = require("./questions");
const {
  viewAllEmployeesFromDb,
  viewAllDepartmentsFromDb,
  viewAllRolesFromDb,
} = require("./queries");

const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_tracker_db",
};

const connection = mysql.createConnection(dbOptions);
// this function will run the program
const init = async () => {
  let inProgress = true;

  while (inProgress) {
    const { chooseAction } = await inquirer.prompt(questions);
    if (chooseAction === "exit") {
      inProgress = false;
      await connection.end();
    } else if (chooseAction === "viewAllEmployees") {
      const data = await viewAllEmployeesFromDb();
      console.table(data);
    } else if (chooseAction === "viewAllDepartments") {
      const data = await viewAllDepartmentsFromDb();
      console.table(data);
    } else if (chooseAction === "viewAllRoles") {
      const data = await viewAllRolesFromDb();
      console.table(data);
    } else if (chooseAction === "viewAllEmployeesByRole") {
      console.log("viewAllEmployeesByRole");
    } else if (chooseAction === "addEmployee") {
      const {
        employeeFirstName,
        employeeLastName,
        employeeDepartment,
        employeeRole,
        employeeSalary,
        employeeManager,
      } = await inquirer.prompt(addEmployeeQuestions);

      console.log(
        employeeFirstName,
        employeeLastName,
        employeeDepartment,
        employeeRole,
        employeeSalary,
        employeeManager
      );
      console.log("addEmployee");
    } else if (chooseAction === "addDepartment") {
      console.log("addDepartment");
    } else if (chooseAction === "addRole") {
      console.log("addRole");
    } else if (chooseAction === "removeEmployee") {
      console.log("removeEmployee");
    } else if (chooseAction === "removeRole") {
      console.log("removeRole");
    } else if (chooseAction === "removeDepartment") {
      console.log("removeDepartment");
    } else if (chooseAction === "updateEmployee") {
      console.log("updateEmployee");
    } else if (chooseAction === "updateEmployeeRole") {
      console.log("updateEmployeeRole");
    } else if (chooseAction === "updateEmployeeManager") {
      console.log("updateEmployeeManager");
    } else if (chooseAction === "viewBudget") {
      console.log("viewBudget");
    }
  }
};

module.exports = init;
