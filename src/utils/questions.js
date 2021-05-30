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
        value: "viewEmployeeByRole",
        name: "View Employees By Role",
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
        value: "updateEmployeeRole",
        name: "Update Employee Role",
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

// const viewEmployeesByRoleQuestion = [
//   {
//     type: "input",
//     message:
//       "Please type in the role id for which you want to see the employees",
//     name: "filterEmployeesByRole",
//   },
// ];

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
    type: "input",
    message: "Please type the First Name of the employee to remove",
    name: "employeeToRemoveFirstName",
  },
  {
    type: "input",
    message: "Please type the Last Name of the employee to remove",
    name: "employeeToRemoveLastName",
  },
];

const removeRoleQuestion = [
  {
    type: "input",
    message: "Please type in the name oft the role you want to remove",
    name: "specificRoleRemove",
  },
];

const removeDepartmentQuestion = [
  {
    type: "input",
    message: "Please type in the name of the department you want to remove",
    name: "specificDepartmentRemove",
  },
];

const updateEmployeeRoleQuestion = [
  {
    type: "input",
    message: "Please type the First Name of the employee you want to update:",
    name: "choiceEmployeeFirstName",
  },
  {
    type: "input",
    message: "Please type the Last Name of the employee you want to update:",
    name: "choiceEmployeeLastName",
  },
  {
    type: "input",
    message: "Please type in the role id you want to attribute to the employee",
    name: "newRoleId",
  },
];

const viewDepartmentTotalBudget = [
  {
    type: "input",
    message: "Please type the name of a department to view its total budget",
    name: "viewSpecificDepartmentTotalBudget",
  },
];

module.exports = {
  questions,
  viewEmployeesByRoleQuestion,
  addEmployeeQuestions,
  addDepartmentQuestion,
  addRoleQuestions,
  removeEmployeeQuestion,
  removeRoleQuestion,
  removeDepartmentQuestion,
  updateEmployeeRoleQuestion,
  viewDepartmentTotalBudget,
};
