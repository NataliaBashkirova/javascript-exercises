const convertToCelsius = function(fahrenheitDegrees) {
  let celsiusDegrees = Math.round(((fahrenheitDegrees - 32) * (5/9)) * 10) /10;
  return celsiusDegrees;
};

const convertToFahrenheit = function(celsiusDegrees) {
  let fahrenheitDegrees = Math.round((celsiusDegrees * (9/5) + 32) * 10) /10;
  return fahrenheitDegrees;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
