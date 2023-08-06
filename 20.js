// Spread Operator - unpack the iterables - (Array, Object, Strings, Map, Sets)
// it takes items out of the array and write it normally
// [10,30,40]  ->  10,20,30

const arr = [3, 4, 5];
const arr2 = [1, 2, ...arr];
console.log(arr2);

// clone array without address reference
const arr3 = [1, 2, 3];
// const arr4 = arr3;
const arr4 = [...arr3];
arr3.push(5);
console.log(arr4);

// merge array
const arr5 = [1, 2];
const arr6 = [3, 4];
const arr7 = [...arr5, ...arr6];
console.log(arr7);

// Spread Operators works not only for arrays, but all iterables, so ex with strings
const name = "Raj";
const nmArr = [...name];
console.log(nmArr);
console.log(...name);

// with function args
function hello(nm, age) {
  console.log(`Hello ${nm}, your age is ${age}`);
}
const arg = ["raj", 12];
// hello("raj", 12);
hello(...arg);

// Spread Operators works not only for arrays, but all iterables, so ex with Object
const rest = { name: "abc", type: "xyz" };
const newRes = { ...rest, add: "kolkata", phone: 34343 };

console.log(rest);
console.log(newRes);
