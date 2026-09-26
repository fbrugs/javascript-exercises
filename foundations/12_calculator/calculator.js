const add = function(arg, arg1) {
  return arg + arg1
};

const subtract = function(arg, arg1) {
	return arg - arg1
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, arg) => acc * arg)
};

const power = function(arg, arg1) {
	return arg ** arg1
};

const factorial = function(arg) {
  let total = 1;
  for (let i = arg; i > 0; i--) {
      total *= i
    }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
