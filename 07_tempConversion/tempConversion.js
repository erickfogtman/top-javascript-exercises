// write a function that converts fahrenheit to celsius, with decimals rounded to 1 place
const convertToCelsius = function (temp) {
  return Math.round((temp - 32) * 5 / 9 * 10) / 10;
};

// write a function that conerts celsius to fahrenheit, with decimals rounded to 1 place
const convertToFahrenheit = function (temp) {
  return Math.round((temp * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
