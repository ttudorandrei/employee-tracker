// dependencies
const inquirer = require("inquirer");

// dev-created dependencies
const Db = require("../db/DB");
const {
  questions,
  // viewEmployeesByRoleQuestion,
  addEmployeeQuestions,
  addDepartmentQuestion,
  addRoleQuestions,
  removeEmployeeQuestion,
  removeRoleQuestion,
  removeDepartmentQuestion,
  updateEmployeeRoleQuestion,
  viewDepartmentTotalBudget,
} = require("./questions");

// this will be called in index.js to run the application
const init = async () => {
  const db = new Db("employee_tracker_db");

  try {
    await db.start();
  } catch (error) {
    console.log(error);
  }

  let inProgress = true;

  // while loop to keep the app working for as much time as the chosen answer is not "Exit"
  // will ask all the questions and log the answers
  while (inProgress) {
    const { chooseAction } = await inquirer.prompt(questions);

    if (chooseAction === "exit") {
      inProgress = false;
      await db.end();
    }

    if (chooseAction === "viewAllEmployees") {
      // logs a table containing the requested data
      const data = await db.viewAllEmployeesFromDb();
      console.table(data);
    }

    if (chooseAction === "viewAllDepartments") {
      // logs a table containing the requested data
      const data = await db.viewAllDepartmentsFromDb();
      console.table(data);
    }

    if (chooseAction === "viewAllRoles") {
      // logs a table containing the requested data
      const data = await db.viewAllRolesFromDb();
      console.table(data);
    }

    if (chooseAction === "viewEmployeesAndTheirRoles") {
      const data = await db.vieEmployeesAndRoles();
      console.table(data);
    }

    if (chooseAction === "addEmployee") {
      // adds new employee to the database
      const answer = await inquirer.prompt(addEmployeeQuestions);
      db.addNewEmployee(answer);
    }

    if (chooseAction === "addDepartment") {
      // adds new department to the database
      const answer = await inquirer.prompt(addDepartmentQuestion);
      db.addNewDepartment(answer);
    }

    if (chooseAction === "addRole") {
      // adds new role to the database
      const answer = await inquirer.prompt(addRoleQuestions);
      db.addNewRole(answer);
    }

    if (chooseAction === "removeEmployee") {
      // removes an employee and all of its associated data
      const answer = await inquirer.prompt(removeEmployeeQuestion);
      db.removeEmployee(answer);
    }

    if (chooseAction === "removeRole") {
      // removes a role and associated data
      const answer = await inquirer.prompt(removeRoleQuestion);
      db.removeRole(answer);
    }

    if (chooseAction === "removeDepartment") {
      // department and associated data
      const answer = await inquirer.prompt(removeDepartmentQuestion);
      db.removeDepartment(answer);
    }

    if (chooseAction === "updateEmployeeRole") {
      // updates an employee role
      const answers = await inquirer.prompt(updateEmployeeRoleQuestion);
      db.updateEmployeeRole(answers);
    }

    if (chooseAction === "viewBudget") {
      console.log("This feature will be coming soon!");
    }
  }
};

// exports the init function
module.exports = init;
