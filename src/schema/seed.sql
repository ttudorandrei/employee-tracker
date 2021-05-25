-- add departments into the "departments" table
INSERT INTO departments (name)
VALUES ("design");

-- add role into "roles" table
-- fix decimal issue for salary
INSERT INTO roles (title, salary, department_id)
VALUES ("Engineer", 36.001, 01);

-- add employee into "employee table"
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Peter", "Griffith", 001, 1001);


-- view departments
SELECT * FROM employee_tracker_db.departments;

-- view employees
SELECT * FROM employee_tracker_db.employees;

-- view roles
SELECT * FROM employee_tracker_db.roles;

-- update employee roles


-- update employee managers

-- view employees by manager

-- delete departments

-- delete roles

-- delete employees

-- view entire budget of a department (combined salaries of all employees in that department)