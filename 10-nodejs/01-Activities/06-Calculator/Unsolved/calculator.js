// Global variables for calculator
const operand = process.argv[2]
const a = process.argv[3]
const b = process.argv[4]

let ouputNum;

//console.log(process.argv[2])
//console.log(process.argv[3])

// addition
if (operand === 'add') {
  outputNum = parseFloat(a) + parseFloat(b);

//subtraction
} else if (operand === 'subtract') {
  outputNum = parseFloat(a) - parseFloat(b)

// multiplication
} else if (operand === 'multiply') {
  outputNum = parseFloat(a) * parseFloat(b)

// division
} else if (operand === 'divide') {
  outputNum = parseFloat(a) / parseFloat(b)

// remainder
} else if (operand === 'remainder') {
  outputNum = parseFloat(a) % parseFloat(b)

// exponent
} else if (operand === 'exp') {
  outputNum = parseFloat(a) ** parseFloat(b)
}
console.log(outputNum)


// algebra ax + b
//} else if (operand === 'algebra') {
  //function f(x) {
    //let y = a
//}


//===========================================================================
//Class solution