// Create a command-line app that takes in two arguments and outputs whether they are equal or not

const a = process.argv[2]
const b = process.argv[3]

if (a === b) {
  console.log(true)
} else {
  console.log(false)
}

console.log(process.argv[2] === process.argv[3])