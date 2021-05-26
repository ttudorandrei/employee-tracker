// dependencies
const inquirer = require("inquirer");

const { questions, addEmployeeQuestions } = require("./questions");

// this function will run the program
const init = async () => {
  try {
    // this is asking the general options questions
    const answers = await inquirer.prompt(questions);
    console.log(answers, "1");
    // if the user chooses to add an employee, he will be presented with the specific questions
    if (answers.chooseAction === "Add Employee") {
      const employeeAnswers = await inquirer.prompt(addEmployeeQuestions);

      console.log(employeeAnswers, "2");
    } else if (answers.chooseAction === "View All Employees") {
      console.log(
        "You chose to view all employees! Functionality coming soon!"
      );
    } else if (answers.chooseAction === "View All Employees By Department") {
      console.log(
        "You chose to view all employees by Department. Functionality coming soon!"
      );
    } else if (answers.chooseAction === "View All Employees By Manager") {
      console.log(
        "You chose to view all employees by manager. Functionality coming soon!"
      );
    } else if (answers.chooseAction === "Remove Employee") {
      console.log("you chose to remove an employee. functionality coming soon");
    } else if (answers.chooseAction === "Update Employee") {
      console.log(
        "you chose to update an employee. functionality coming soon!"
      );
    } else if (answers.chooseAction === "Update Employee Role") {
      console.log(
        "you chose to update an employee role. functionality coming soon"
      );
    } else if (answers.chooseAction === "Update Employee Manager") {
      console.log(
        "you chose to update an employee manager. functionality coming soon."
      );
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = init;
