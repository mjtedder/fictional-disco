-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER AUTO_INCREMENT,
  -- Create a string column called "language" --
  language VARCHAR(30),
  -- Create an integer column called "rating" --
  rating INTEGER(10),
  -- Set the id as this table's primary key
  PRIMARY KEY (id)
);

-- Create new example rows
INSERT INTO programming_languages (language, rating) VALUES
  ('Java', 95), ('Python', 50), ('C#', 80)

-- BONUS
-- Add a column called "mastered" and set default value to 'true'
ALTER TABLE programming_languages
ADD mastered BOOLEAN NOT NULL
CONSTRAINT mastered DEFAULT true
-- Update a row
UPDATE programming_languages
SET language = 'JavaScript'
WHERE id = 1;

SELECT * FROM programming_languages