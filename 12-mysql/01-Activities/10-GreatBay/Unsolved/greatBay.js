// Required dependencies
var mysql = require('mysql')
var inquirer = require('inquirer')
require ('dotenv').config()

// Connect to db
var connection = mysql.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

connection.connect(function(err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId)
})

// start application using inquirer
