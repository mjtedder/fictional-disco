DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE table auctions (
    id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(30) NOT NULL,
    category VARCHAR(30) NOT NULL,
    starting_bid INT(10) DEFAULT 0,
    highest_bid INT(10) DEFAULT 0,
    PRIMARY KEY (id)
);