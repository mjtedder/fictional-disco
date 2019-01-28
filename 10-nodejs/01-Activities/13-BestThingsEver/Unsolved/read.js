// Require fs
const fs = require('fs')

fs.readFile('best_things_ever.txt', 'utf-8', (err, data) => {
    if (err) throw err
    let array = data.split(",");
    for (i in array) {
        console.log(array[i])
    }
    //console.log(data)
})