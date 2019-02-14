// Required dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();

// Connect to db
var connection = mysql.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

connection.connect(function (err) {
    if (err) throw err;
    //console.log('connected as id ' + connection.threadId)
    start();
});

// start application using inquirer
function start() {
    inquirer
        .prompt({
            type: "list",
            name: "choice",
            message: "Please choose an option.",
            choices: ["POST AN ITEM", "BID ON AN ITEM", "EXIT"]
        })
        .then(function (answers) {
            if (answers.choice === "POST AN ITEM") {
                postBid();
            } else if (answers.choice === "EXIT") {
                endConnection();
            } else {
                makeBid();
            }
        });
}

// end connection
function endConnection() {
    connection.end();
}

// post bid
function postBid() {
    inquirer
        .prompt([{
                type: "input",
                name: "item",
                message: "What is the item you would like to submit?"
            },
            {
                type: "input",
                name: "category",
                message: "What category would you like to place your auction?"
            },
            {
                type: "input",
                name: "startBid",
                message: "What would you like your starting bid to be?",
                valid: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            connection.query(
                "INSERT INTO auctions SET ?", {
                    item_name: answer.item,
                    category: answer.category,
                    starting_bid: answer.startBid,
                    highest_bid: answer.startBid
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your item has been submitted for bidding!");
                }
            );
        });
    start();
}

function makeBid() {
    connection.query(
        "SELECT * FROM auctions",
        function (err, res) {
            if (err) throw err;
            inquirer.prompt([{
                    type: 'list',
                    name: 'item',
                    message: 'Choose the item you want to bid on:',
                    choices: choiceArr = function () {
                        var choiceArr = []
                        for (i = 0; i < res.length; i++) {
                            //console.log(res[i].item_name);
                            choiceArr.push(res[i].item_name)
                        }
                        return choiceArr;
                    }
                },
                {
                    type: 'input',
                    name: 'bid',
                    message: 'How much would you like to bid?'
                }
            ]).then(function (answer) {
                var userBid;
                for (i = 0; i < res.length; i++) {
                    if (res[i].item_name === answer.item) {
                        userBid = res[i]
                    }
                }
                if (userBid.highest_bid < parseInt(answer.bid)) {
                    connection.query(
                        'UPDATE auctions SET ? WHERE ?', [{
                                highest_bid: answer.bid
                            },
                            {
                                id: userBid.id
                            }
                        ], function(err) {
                            if (err) throw err;
                            console.log('Congrats! You are are the highest bidder!')
                            start()
                        }
                    )
                } else {
                    console.log('Sorry, try again.')
                    start();
                }
            })
        })
}