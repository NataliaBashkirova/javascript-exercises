const add = function(left, right) {
  return left + right;	
};

const subtract = function(left, right) {
	return left - right;
};

const sum = function(operands) {
	let sum = 0;
  operands.forEach(x => sum += x);
  return +sum;
};

const multiply = function(operands) {
  let product = 1;
  operands.forEach(x => product *= x);
  return +product;
};

const power = function(base, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= base;
  }
  return result;	
};

const factorial = function(number) {
  result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;	
};


multiply([2, 4]);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
