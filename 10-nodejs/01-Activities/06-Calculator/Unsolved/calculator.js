// Global variables for calculator
const operand = process.argv[2]
const a = process.argv[3]
const b = process.argv[4]

//console.log(process.argv[2])
//console.log(process.argv[3])

// addition
if (operand === 'add') {
  console.log(parseFloat(a) + parseFloat(b))

//subtraction
} else if (operand === 'subtract') {
  console.log(parseFloat(a) - parseFloat(b))

// multiplication
} else if (operand === 'multiply') {
  console.log(parseFloat(a) * parseFloat(b))

// division
} else if (operand === 'divide') {
  console.log(parseFloat(a) / parseFloat(b))

// remainder
} else if (operand === 'remainder') {
  console.log(parseFloat(a) % parseFloat(b))

// exponent
} else if (operand === 'exp') {
  console.log(parseFloat(a) ** parseFloat(b))

// algebra ax + b
//} else if (operand === 'algebra') {
  //function f(x) {
    //let y = a
//}


//===========================================================================
//Class solution