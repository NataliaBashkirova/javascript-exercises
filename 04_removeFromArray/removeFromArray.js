const removeFromArray = function (inputArray, ...valuesToRemove) {
  //
  for (value of valuesToRemove) {
    let index = inputArray.indexOf(value);
    while (index !== -1) {
        inputArray.splice(index, 1);
        index = inputArray.indexOf(value);
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
