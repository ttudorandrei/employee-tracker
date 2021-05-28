-- STEP 3: Run this in your MySQL Workbench
USE employee_tracker_db;

INSERT INTO roles (title, salary, department_id)
VALUES ("Senior Engineer", 126000, 5),
("Junior Engineer", 36000, 5),
("Engineer", 86000, 5),

("HR Administrator", 48000, 3),
("HR Assistant", 26000, 3),

("Sales Manager", 76000, 4),
("Sales Advisor", 35000, 4),

("Head of Marketing", 93000, 2),
("Marketing Assistant", 32000, 2),

("Content Creator", 45000, 1);

-- ////////////////////////////////////////////////////////////////
-- STEP 4 go to seedEmployees.sql