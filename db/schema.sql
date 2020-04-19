DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30),
    devoured TINYINT(1),
	PRIMARY KEY (id)
);