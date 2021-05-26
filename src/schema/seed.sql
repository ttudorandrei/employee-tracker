-- add departments into the "departments" table
INSERT INTO departments (name)
VALUES ("Design"),
("Marketing"),
("Human Resources"),
("Accounting"),
("IT");

-- add roles into "roles" table
INSERT INTO roles (title, salary, department_id)
VALUES ("Senior Engineer", 126000, 05),
("Junior Engineer", 36000, 05),
("Engineer", 86000, 05),
("HR Administrator", 48000, 03),
("HR Assistant", 26000, 03),
("Sales Manager", 76000, 04)
("Sales Advisor", 35000, 04),
("Head of Marketing", 93000, 02),
("Marketing Assistant", 32000, 02),
("Content Creator", 45000, 01);

-- add employees into "employee table"
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Peter", "Griffith", 001, 1001),
("Daniel", "Ricciardo", 002, 1002),
("Valtteri", "Bottas", 003, 1003),
("Max", "Verstappen", 004, 1004),
("Lando", "Norris", 005, 1005),
("Sergio", "Perez", 006, 1006),
("Charles", "Leclerc", 007, 1007),
("Carlos", "Sainz", 008, 1008);

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