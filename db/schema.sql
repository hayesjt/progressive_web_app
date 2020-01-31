-- deleting old data and recreating new database so we have good data to test -- 
DROP DATABASE IF EXISTS books_database;

-- Creating new data base -- 
CREATE database books_database;

-- creating table

USE books_database;

CREATE TABLE books (
    id int NOT NULL AUTO_INCREMENT,
    book_name varchar(100) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
)
