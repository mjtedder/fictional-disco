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
    createEntry();
})

// CRUD - Create
function createEntry() {
    var post = {title: 'Got A Girl', artist: 'The Black Seeds', genre: 'Reggae'};
    var query = connection.query('INSERT INTO playlist SET?', post, function(err, res, fields) {
        if (err) throw err;
    })
    console.log(query.sql)
    updateSong();
}

// CRUD - Read
function readPlaylist() {
    connection.query('SELECT * FROM playlist', function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + ' | ' + res[i].title + ' | ' + res[i].artist + ' | ' + res[i].genre);
        }
        console.log('------------------------------------------------------------------------------------');
    });
    connection.end();
}

function readProgGenre() {
    var query = connection.query('SELECT * FROM playlist WHERE genre = ?', ['Prog Rock'], function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + ' | ' + res[i].title + ' | ' + res[i].artist + ' | ' + res[i].genre);
        }
        console.log('------------------------------------------------------------------------------------');
    });
    console.log(query.sql);
    connection.end();
}

// CRUD - Update
function updateSong() {
    var query = connection.query('UPDATE playlist SET title = ? WHERE id = ?', ['Skyway', 2],
    function (err, res) {
        console.log(res.affectedRows + ' Updated song!');
    })
    deleteSong();
}

// CRUD - Delete
function deleteSong() {
    var query = connection.query('DELETE FROM playlist WHERE ?', {title: 'Got A Girl'},
    function (err, res) {
        console.log(res.affectedRows + ' Deleted song!');
    })
    readPlaylist();
}