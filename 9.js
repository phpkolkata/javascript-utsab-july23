// Functions

// general function
// - in JS, general function can be called before it declares
const myAge = calcAge(1981);
console.log(myAge);
// method 1 - genral function
function calcAge(birthYear) {
  return 2023 - birthYear;
}

// - function expression is good, it forces us to declare it first and use later
// - function expression produces value
// method 2 - function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
console.log(calcAge2(1888));

// method 3
// Arrow functions
// - no paranthesis(bracket) required
// - return can be called implicityly
// - no nee to write keyword "funciton"
// - no need curly braces

// const calcAge3 = ()=>{};syntax
// variatin 1
// const calcAge3 = (birthYear) => {
//   return 2023 - birthYear;
// };

// variation 2
const calcAge3 = (birthYear) => 2023 - birthYear;

console.log(calcAge3(2001));
