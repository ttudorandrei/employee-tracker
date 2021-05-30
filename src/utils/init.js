// dependencies
const inquirer = require("inquirer");

// dev-created dependencies
const Db = require("../db/DB");
const {
  questions,
  addEmployeeQuestions,
  addDepartmentQuestion,
  addRoleQuestions,
  removeEmployeeQuestion,
  removeRoleQuestion,
  removeDepartmentQuestion,
  updateEmployeeRoleQuestion,
  updateEmployeeManagerQuestion,
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

    if (chooseAction === "addEmployee") {
      // adds new employee to the database
      const answer = await inquirer.prompt(addEmployeeQuestions);
      await db.addNewEmployee(answer);
      console.log("Employee was added successfully!");
    }

    if (chooseAction === "addDepartment") {
      // adds new department to the database
      const answer = await inquirer.prompt(addDepartmentQuestion);
      await db.addNewDepartment(answer);
    }

    if (chooseAction === "addRole") {
      // adds new role to the database
      const answer = await inquirer.prompt(addRoleQuestions);
      await db.addNewRole(answer);
    }

    if (chooseAction === "removeEmployee") {
      const answer = await inquirer.prompt(removeEmployeeQuestion);

      db.removeEmployee(answer);

      console.log(answer);
    }

    if (chooseAction === "removeRole") {
      const answer = await inquirer.prompt(removeRoleQuestion);
      console.log(answer);
    }

    if (chooseAction === "removeDepartment") {
      const answer = await inquirer.prompt(removeDepartmentQuestion);
      db.removeDepartment(answer);
    }

    if (chooseAction === "updateEmployeeRole") {
      const answers = await inquirer.prompt(updateEmployeeRoleQuestion);

      console.log(answers);
      // db.updateEmployeeRole(answers);
    }

    if (chooseAction === "updateEmployeeManager") {
      const answer = await inquirer.prompt(updateEmployeeManagerQuestion);
      console.log(answer);
    }

    if (chooseAction === "viewBudget") {
      const answer = await inquirer.prompt(viewDepartmentTotalBudget);
      console.log(answer);
    }
  }
};

// exports the init function
module.exports = init;
