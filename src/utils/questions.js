// questions asked when the program is run
const questions = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Employees By Department",
      "View All Employees By Manager",
      "Add Employee",
      "Remove Employee",
      "Update Employee",
      "Update Employee Role",
      "Update Employee Manager",
    ],
    name: "chooseAction",
  },
];

// questions asked if the user chooses to add an employee
const addEmployeeQuestions = [
  {
    type: "input",
    message: "Please type in your employee`s first name:",
    name: "employeeFirstName",
  },

  {
    type: "input",
    message: "Please type in your employee`s last name:",
    name: "employeeLastName",
  },

  {
    type: "list",
    message:
      "Please choose the department the employee is going to be part of:",
    choices: ["Design", "Marketing", "Human Resources", "Accounting", "IT"],
    name: "employeeDepartment",
  },

  {
    type: "list",
    message: "Please choose the role the employee has:",
    choices: [
      "Junior Engineer",
      "Engineer",
      "Senior Engineer",
      "HR Administrator",
      "HR Assistant",
      "Sales Manager",
      "Sales Advisor",
      "Head of Marketing",
      "Marketing Assistant",
      "Content Creator",
    ],
    name: "employeeRole",
  },
  {
    type: "input",
    message: "Please type in the employee salary. Do NOT use decimals.",
    name: "employeeSalary",
  },

  {
    type: "input",
    message:
      "Please type in the employee`s manager name. If not applicable, leave empty.",
    default: "not applicable",
    name: "employeeManager",
  },
];

// view all employees
// SELECT * FROM employee_tracker_db.employees;

// view all employees by manager
// find syntax

// view all employees by department
// fin syntax

// remove employee
// step 1: present a list of all employees,
// step 2: choose employee,
//  step 3: cascade remove the selected employee

// update employee
// step 1: show list of all employees
// step 2: update selected employee (name??)

// update employee manager
// step 1: show list of all employees
// step 2: update selected employee manager (find syntax)

// update employee role
// step 1: show list of all employees
// step 2: update selected employee role (find syntax)

module.exports = { questions, addEmployeeQuestions };
