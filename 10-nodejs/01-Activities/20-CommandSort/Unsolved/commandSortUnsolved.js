// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

const numbers = process.argv.slice(2)

numbers.sort((a, b) => a - b)

console.log(numbers)
