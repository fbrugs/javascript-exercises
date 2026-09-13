const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);

  if (celsius % 1 !== 0) {
    return +celsius.toFixed(1);
  } else {
  return celsius
  }
};

const convertToFahrenheit = function(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit % 1 !== 0 ? +fahrenheit.toFixed(1) : fahrenheit
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
