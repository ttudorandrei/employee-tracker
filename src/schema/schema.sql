
-- deletes database if exists
DROP DATABASE IF EXISTS employee_tracker_db;
-- creates database
CREATE DATABASE employee_tracker_db;
;

-- uses database
USE employee_tracker_db;
;

-- creates a "departments" table in the db
CREATE TABLE departments (
  -- add an "id" row with a key of id that has to be an integer, it cannot be null, it is a primary key and auto-increments itself
  id INT NOT NULL AUTO_INCREMENT,
  -- creates a "name" row that is a string, accepting maximum 30 characters
  name VARCHAR(30),
  PRIMARY KEY (id)
);

-- creates a "roles" table
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  -- this creates a "salary" row that can contain decimals
  salary DECIMAL(10, 3),
  department_id INT,
  PRIMARY KEY (id)
);

-- creates an "employee" table
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);


