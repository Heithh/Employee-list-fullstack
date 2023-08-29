-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- to import this file from
--  1) the command line run mysql -u <user> -p < <path to file>
--  2) the mysql command line client run source <absolute file path>

DROP DATABASE IF EXISTS fullstackreps;

CREATE DATABASE fullstackreps;

USE fullstackreps;

CREATE TABLE IF NOT EXISTS employees (
  id integer UNIQUE PRIMARY KEY,
  first_name varchar(255),
  last_name varchar(255),
  city varchar(255)
);



INSERT INTO employees (id, first_name, last_name, city) VALUES (1, "Suman", "Rush", "Menlo Park");
INSERT INTO employees (id, first_name, last_name, city) VALUES (2, "Marco", "Cooke", "Valdez");
INSERT INTO employees (id, first_name, last_name, city) VALUES (3, "Anabelle", "Howell", "Vallejo");
INSERT INTO employees (id, first_name, last_name, city) VALUES (4, "Alistair", "Grey", "Estes Park");
INSERT INTO employees (id, first_name, last_name, city) VALUES (5, "Bayley", "Brennan","Fredericksburg");
INSERT INTO employees (id, first_name, last_name, city) VALUES (6, "Shakira", "Harrington", "Grand Island");
INSERT INTO employees (id,first_name, last_name, city) VALUES (7, "Jayson", "Schaefer", "Reno");
INSERT INTO employees (id,first_name, last_name, city) VALUES (8, "Shaurya", "Pugh", "Lafayette");
INSERT INTO employees (id,first_name, last_name, city) VALUES (9, "Mikolaj", "Christian", "Glendive");
INSERT INTO employees (id,first_name, last_name, city) VALUES (10, "Lily", "Taylor", "Lubbock");
INSERT INTO employees (id,first_name, last_name, city) VALUES (11, "Henley", "Almond", "Lake Placid");
INSERT INTO employees (id, first_name, last_name, city) VALUES (12, "Pharrell", "Cohen", "Woodbridge");
INSERT INTO employees (id, first_name, last_name, city) VALUES (13, "Amina", "Andrade", "Lock Haven");
INSERT INTO employees (id, first_name, last_name, city) VALUES (14, "Alan", "Davey", "Orange");
INSERT INTO employees (id, first_name, last_name, city) VALUES (15, "Jaeden", "West", "Hays");
