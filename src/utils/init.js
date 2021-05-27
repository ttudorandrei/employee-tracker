// dependencies
const inquirer = require("inquirer");

// dev-created dependencies
const Db = require("../db/DB");
const { questions, addEmployeeQuestions } = require("./questions");

const init = async () => {
  const db = new Db("employee_tracker_db");
  try {
    await db.start();
  } catch (error) {
    console.log(error);
  }
  let inProgress = true;

  while (inProgress) {
    const { chooseAction } = await inquirer.prompt(questions);
    if (chooseAction === "exit") {
      inProgress = false;
      await db.end();
    }
    if (chooseAction === "viewAllEmployees") {
      const data = await db.viewAllEmployeesFromDb();
      console.table(data);
    }
    if (chooseAction === "viewAllDepartments") {
      const data = await db.viewAllDepartmentsFromDb();
      console.table(data);
    }
    if (chooseAction === "viewAllRoles") {
      const data = await db.viewAllRolesFromDb();
      console.table(data);
    }
    if (chooseAction === "viewAllEmployeesByRole") {
      console.log("viewAllEmployeesByRole");
    }
    if (chooseAction === "addEmployee") {
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
    }
    if (chooseAction === "addDepartment") {
      console.log("addDepartment");
    }
    if (chooseAction === "addRole") {
      console.log("addRole");
    }
    if (chooseAction === "removeEmployee") {
      console.log("removeEmployee");
    }
    if (chooseAction === "removeRole") {
      console.log("removeRole");
    }
    if (chooseAction === "removeDepartment") {
      console.log("removeDepartment");
    }
    if (chooseAction === "updateEmployee") {
      console.log("updateEmployee");
    }
    if (chooseAction === "updateEmployeeRole") {
      console.log("updateEmployeeRole");
    }
    if (chooseAction === "updateEmployeeManager") {
      console.log("updateEmployeeManager");
    }
    if (chooseAction === "viewBudget") {
      console.log("viewBudget");
    }
  }
};

module.exports = init;
