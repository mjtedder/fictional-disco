var mysql = require('mysql')
require('dotenv').config()

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    // database: 'playlist_db'
})

connection.connect(function(err) {
    if(err) {
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log('connected as id ' + connection.threadId)
    connection.end()
})


