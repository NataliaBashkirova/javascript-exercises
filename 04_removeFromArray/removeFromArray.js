const removeFromArray = function (inputArray, ...valuesToRemove) {
  //

  return inputArray.filter(input => !valuesToRemove.includes(input));
};

// Do not edit below this line
module.exports = removeFromArray;
