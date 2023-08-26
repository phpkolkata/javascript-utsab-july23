// Functions into DEEP

// Functions are First Class memeber in Javascript
// - js treats funcitons as first class member(citizen)
// - means, funcitons are simply values
// - so, funcitons are just another type of Object

// ------------------------------

// Higher Order Functions
// - a funciton A that receive another function B as argument - this is only possilbe  functions are simply values
// - a function A can returns another function B as a return value -  this is only possilbe  functions are simply values
// - since a function A returns/accepts a function B - A is a higher order funciton which runs first and then B function

// ex;
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const firstWordUpper = function (str) {
  const [first, ...otherwords] = str.split(" ");
  //   console.log(first, otherwords);
  return [first.toUpperCase(), ...otherwords].join(" ");
};

// higher order function - functions taken as arguments
const transform = function (str, fn) {
  const res = fn(str);
  return res;
};

console.log(transform("hello there how are you", oneWord));
console.log(transform("hello there how are you", firstWordUpper));

// higher order function - function return as funciton
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// one way
const greetHi = greet("hi");

greetHi("raj"); // hi raj

// another way
greet("Hi")("raj");
// arr[0][2]
