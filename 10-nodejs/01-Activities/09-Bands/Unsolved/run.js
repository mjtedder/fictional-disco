var bands = require('./bands.js')

//console.log('A rock band is ' + music.bands.rock)
//console.log('An electronic artist is ' + music.bands.electronic)
//console.log('A hiphop group is ' + music.bands.hiphop)

for (key in bands) {
    console.log('A ' + key + ' band is ' + bands[key] + '.');
}

