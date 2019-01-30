// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// ...
const axios = require('axios')

// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = process.argv

// Splicing the argument into an array of 2
movieName.splice(0, 2)
//console.log(movieName)

// We then join the array with a '+' sign
var stringArr = movieName.join('+')

// Encode the string
var combinedName = encodeURI(stringArr)
//console.log(combinedName)


// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + combinedName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
console.log(queryUrl)


// Then create a request with axios to the queryUrl
// ...
axios.get(queryUrl)
// If the request with axios is successful
// ...
.then(
    function(response) {
// Then log the Release Year for the movie
// ...
console.log("The movie's release year is: " + response.data.Year);
})