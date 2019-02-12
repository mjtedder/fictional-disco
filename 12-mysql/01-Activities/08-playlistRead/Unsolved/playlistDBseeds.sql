DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE playlist(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    artist VARCHAR(30) NULL,
    genre VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

INSERT INTO playlist (title, artist, genre)
VALUES ('August', "Umphrey's McGee", 'Prog Rock');

INSERT INTO playlist (title, artist, genre)
VALUES ('Origami', 'Aqueous', 'Prog Rock');

INSERT INTO playlist (title, artist, genre)
VALUES ('You Are A Tourist', 'Death Cab For Cutie', 'Alternative Rock');

INSERT INTO playlist (title, artist, genre)
VALUES ('Spectacle', 'The Disco Biscuits', 'Prog Rock');

INSERT INTO playlist (title, artist, genre)
VALUES ('Reality Check', 'Binary Star', 'Hip Hop');

INSERT INTO playlist (title, artist, genre)
VALUES ('Think Different', 'Nujabes feat. Substantial', 'Hip Hop');

INSERT INTO playlist (title, artist, genre)
VALUES ('All Apologies', 'Nirvana', 'Alternative Rock');

SELECT * FROM playlist;