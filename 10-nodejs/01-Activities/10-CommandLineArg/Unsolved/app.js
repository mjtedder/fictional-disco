/* var arg1 = parseFloat(process.argv[2])
var arg2 = parseFloat(process.argv[3])

if (arg1 === arg2) {
    console.log('True')
} else {
    console.log('False')
} */

// Refactored solution
console.log(process.argv[2] === process.argv[3])

// Check if two arguments are multiples of 7
console.log((process.argv[2] % 7) + (process.argv[3] % 7) === 0)