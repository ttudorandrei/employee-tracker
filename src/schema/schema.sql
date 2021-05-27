
-- run this FIRST
DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments (
  id_departments INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id_departments)
);

CREATE TABLE roles (
  id_roles INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary INT,
  department_id INT NOT NULL,
  PRIMARY KEY (id_roles),
 CONSTRAINT fk_departments FOREIGN KEY (department_id) 
		REFERENCES departments(id) ON DELETE CASCADE
);

 CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id),
  CONSTRAINT fk_roles FOREIGN KEY (role_id) 
			REFERENCES roles(id_roles) ON DELETE CASCADE,
  CONSTRAINT fk_employees FOREIGN KEY (manager_id) 
			REFERENCES employees(id) ON DELETE CASCADE
);

-- /////////////////////////////////////////////////////////////////
-- STEP 2: go to seedDepartments.sql

-- run this AFTER running the seed files
-- STEP 5(WIP):
-- UPDATE employees
-- SET manager_id = 6
-- WHERE role_id = 7
