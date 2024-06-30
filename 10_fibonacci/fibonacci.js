const fibonacci = function (number) {
//   number = +number;
  if (number == 0) return 0;
  if (number < 0) return "OOPS";
  if (number == 1 || number == 2) {
    return 1;
  } else {
    previousNumber = 1;
    prePreviousNumber = 1;
    let currentNumber = 2;
    for (let i = 2; i < number; i++) {
      currentNumber = previousNumber + prePreviousNumber;
      prePreviousNumber = previousNumber;
      previousNumber = currentNumber;
    }
    return currentNumber;
  }
};

// Do not edit below this line
module.exports = fibonacci;
