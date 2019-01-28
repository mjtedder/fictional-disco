// Require fs
const fs = require('fs')

//Append contents to file, creating the file if it doesn't already exist
fs.appendFile('message.txt', 'Hello World', 'utf8', (err) => {
    if (err) throw err
    console.log('The data was appended to the file!')
})