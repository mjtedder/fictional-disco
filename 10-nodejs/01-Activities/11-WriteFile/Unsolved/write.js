// required dependency
const fs = require('fs')

fs.writeFile('music.txt', "Umphrey's Mcgee, The Disco Biscuits, Aqueous, Papadosio", (err) => {
    if (err) throw err
    console.log('File created!')
})

