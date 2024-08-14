DROP DATABASE IF EXISTS courses_db;
CREATE DATABASE courses_db;

\c courses_db;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE course_names (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  department_id INTEGER,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

