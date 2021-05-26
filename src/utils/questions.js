// questions asked when the program is run
const questions = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: [
      {
        value: "viewAllEmployees",
        name: "View All Employees",
      },

      {
        value: "viewAllDepartments",
        name: "View All Departments",
      },

      {
        value: "viewAllRoles",
        name: "View All Roles",
      },

      {
        value: "viewAllEmployeesByDepartment",
        name: "View All Employees By Department",
      },

      {
        value: "viewAllEmployeesByRole",
        name: "View All Employees By Manager",
      },

      {
        value: "addEmployee",
        name: "Add an Employee",
      },

      {
        value: "addDepartment",
        name: "Add Departments",
      },

      {
        value: "addRole",
        name: "Add Role",
      },

      {
        value: "removeEmployee",
        name: "Remove an Employee",
      },

      {
        value: "removeRole",
        name: "Remove Role",
      },

      {
        value: "removeDepartment",
        name: "Remove Department",
      },

      {
        value: "updateEmployee",
        name: "Update an Employee",
      },

      {
        value: "updateEmployeeRole",
        name: "Update Employee Role",
      },

      {
        value: "updateEmployeeManager",
        name: "Update Employee Manager",
      },

      {
        short: "Budget",
        value: "viewBudget",
        name: "View Utilised Budget for a Department",
      },
      {
        short: "Exit",
        value: "exit",
        name: "Exit",
      },
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

// view all employees DONE
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
