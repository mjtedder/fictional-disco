//Kenton's solution======================================================

//addition function
console.log(process.argv);


if (process.argv[2] === 'add') {
  var result = parseFloat(process.argv[3]) + parseFloat(process.argv[4]);
}

//subtraction function
else if (process.argv[2] === 'subtract') {
  result = parseFloat(process.argv[3]) - parseFloat(process.argv[4]);
}

//multiplication function
else if (process.argv[2] === 'multiply') {
  result = parseFloat(process.argv[3]) * parseFloat(process.argv[4]);
}

//division function
else if (process.argv[2] === 'divide') {
  result = parseFloat(process.argv[3]) / parseFloat(process.argv[4]);
}

//remainder function
else if (process.argv[2] === 'remainder') {
  result = parseFloat(process.argv[3]) % parseFloat(process.argv[4]);
}

//exponent function
else if (process.argv[2] === "exp") {
  result = Math.pow(parseFloat(process.argv[3]), parseFloat(process.argv[4]));
}

//algebra function
else if (process.argv[2] === "algebra") {
  result = parseAlgebra(parseFloat(process.argv[3]));
}

console.log(result);

//===========================================================================
//Class solution
