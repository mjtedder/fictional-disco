// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
const NodeGeocoder = require('node-geocoder')

const options = {
    provider: 'mapquest',
    apiKey: 'GAN2yIJEAC5Iam9YHtLy4AuU4SDA67Ps    '
}

const geocoder = NodeGeocoder(options)

// Take in the command line arguments
const city = process.argv[2]
const state = process.argv[3]
const address = city + " " + state

// Build your address as an array or string
// Geocoding
geocoder.geocode(address, function ( err, res ) {
    if (err) throw err
    console.log(JSON.stringify(res, null, 2));
  });



// Then use Geocoder NPM to geocode the address
