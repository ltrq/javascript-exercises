
const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((total, current) => total + current, 0);
};

const multiply = function(a) {
  return a.reduce((total, current) => total * current, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let factorial = 1;
  for (let i = 1; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
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
