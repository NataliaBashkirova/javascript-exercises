const sumAll = function (start, finish) {
  if (finish < start) {
    let t = start;
    start = finish;
    finish = t;
  }

  if (
    typeof start != "number" ||
    typeof finish != "number" ||
    start < 0 ||
    finish < 0
  ) {
    return "ERROR";
  }

  let sum = 0;
  for (let i = start; i <= finish; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
