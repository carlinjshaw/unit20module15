DROP DATABASE IF EXISTS bookstore_db;
CREATE DATABASE bookstore_db;

\c bookstore_db;

CREATE TABLE authors (
  id SERIAL NOT NULL  PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE books (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  author_id INTEGER
);

