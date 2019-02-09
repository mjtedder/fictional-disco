-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(30) NOT NULL,
  -- Make an numeric column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song VARCHAR(30) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(30) NOT NULL,
  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER NOT NULL AUTO_INCREMENT,
  -- Create a string column called "movie" which cannot be null --
  movie VARCHAR(30) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN DEFAULT false,
  -- Make an integer column called "score" --
  score INTEGER(10),
  -- Set the primary key of the table to id --
  PRIMARY KEY id
);

INSERT INTO favorite_foods (food, score)
  VALUES ("Pizza", 10), ("Kimchi", 8), ("Curry", 6);

INSERT INTO favorite_songs (song, artist, score)
  VALUES ("August", "Umphrey's Mcgee", 9), ("Strange Times", "Aqueous", 9), ("Vactrollio", "Papadosio", 10);

INSERT INTO favorite_movies (movie, five_times, score)
  VALUES ("Pulp Fiction", true, 10), ("The Matrix", true, 9), ("Eternal", true, 8);

-- Display favorite_movies table --
SELECT * FROM favorite_movies
