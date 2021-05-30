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
  updateEmployeeQuestion,
  updateEmployeeRoleQuestion,
  updateEmployeeManagerQuestion,
  viewDepartmentTotalBudget,
} = require("./questions");

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
    if (chooseAction === "addEmployee") {
      const answer = await inquirer.prompt(addEmployeeQuestions);

      await db.addNewEmployee(answer);

      console.log("Yay! Employee was added successfully!");
    }
    if (chooseAction === "addDepartment") {
      const answer = await inquirer.prompt(addDepartmentQuestion);

      await db.addNewDepartment(answer);
    }
    if (chooseAction === "addRole") {
      const answer = await inquirer.prompt(addRoleQuestions);

      await db.addNewRole(answer);
    }
    if (chooseAction === "removeEmployee") {
      const answer = await inquirer.prompt(removeEmployeeQuestion);
      console.log(answer);
    }
    if (chooseAction === "removeRole") {
      const answer = await inquirer.prompt(removeRoleQuestion);
      console.log(answer);
    }
    if (chooseAction === "removeDepartment") {
      const answer = await inquirer.prompt(removeDepartmentQuestion);
      console.log(answer);
    }
    if (chooseAction === "updateEmployee") {
      const answer = await inquirer.prompt(updateEmployeeQuestion);
      console.log(answer);
    }
    if (chooseAction === "updateEmployeeRole") {
      const answer = await inquirer.prompt(updateEmployeeRoleQuestion);
      console.log(answer);
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

module.exports = init;
