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
        name: "View All Employees By Role",
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
        value: "viewBudget",
        name: "View Utilised Budget for a Department",
      },

      {
        value: "exit",
        name: "Exit",
      },
    ],
    name: "chooseAction",
  },
];

const viewEmployeeByRole = [
  {
    type: "list",
    message: "Please choose a role to filter employees by",
    name: "filterEmployeesByRole",
    choices: "",
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
    type: "input",
    message: "Please type in the role id the employee has:",
    name: "employeeRole",
  },

  {
    type: "input",
    message: "Does the employee have a manager? If not, please leave empty.",
    name: "hasManager",
  },
];

const addDepartmentQuestion = [
  {
    type: "input",
    message: "Please type in the department name",
    name: "newDepartmentName",
  },
];

const addRoleQuestions = [
  {
    type: "input",
    message: "Please type in the role name:",
    name: "newRoleName",
  },
  {
    type: "input",
    message: "Please type in the salary (MUST be a number. NO DECIMALS):",
    name: "salaryValue",
  },
  {
    type: "input",
    message:
      "Please type in the department id (MUST be a number. NO DECIMALS):",
    name: "newRoleDepartmentId",
  },
];

const removeEmployeeQuestion = [
  {
    type: "list",
    message: "Please choose an employee to remove",
    choices: "",
    name: "specificEmployeeRemove",
  },
];

const removeRoleQuestion = [
  {
    type: "list",
    message: "Please choose a role to remove",
    choices: [],
    name: "specificRoleRemove",
  },
];

const removeDepartmentQuestion = [
  {
    type: "list",
    message: "Please choose a department to remove",
    choices: "",
    name: "specificDepartmentRemove",
  },
];

const updateEmployeeQuestion = [
  {
    type: "list",
    message: "Which employee would you like to update?",
    choices: [],
    name: "specificEmployeeUpdate",
  },
];

const updateEmployeeRoleQuestion = [
  {
    type: "list",
    message: "For which employee would you like to update the role?",
    choices: [],
    name: "specificEmployeeRoleUpdate",
  },
];

const updateEmployeeManagerQuestion = [
  {
    type: "list",
    message: "For which employee would you like to update the manager?",
    choices: [],
    name: "specificEmployeeManagerUpdate",
  },
];

const viewDepartmentTotalBudget = [
  {
    type: "list",
    message: "Please choose a department to view its total budget",
    choices: [],
    name: "viewSpecificDepartmentTotalBudget",
  },
];
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

module.exports = {
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
};
