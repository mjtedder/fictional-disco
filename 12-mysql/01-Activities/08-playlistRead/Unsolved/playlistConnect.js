var mysql = require('mysql')
require('dotenv').config()

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log('connected as id ' + connection.threadId)
    readPlaylist();
    readProgGenre();
})

function readPlaylist() {
    console.log('\nCurrent Playlist Contents:\n')
    connection.query('SELECT * FROM playlist', function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + ' | ' + res[i].title + ' | ' + res[i].artist + ' | ' + res[i].genre);
        }
        console.log('------------------------------------------------------------------------------------');
    });
}

function readProgGenre() {
    console.log('\nAll Prog Rock Songs:\n')
    connection.query('SELECT * FROM playlist WHERE genre = ?', ['Prog Rock'], function(err, res) {
        if (err) throw err;
        console.log(res);
    })
    connection.end();
}