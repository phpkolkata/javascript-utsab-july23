// Array METHOD

// SLICE
let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2)); //["c","d","e"]
console.log(arr.slice(2, 4)); // ["c","d"]  // 2nd param, last value will not be included
console.log(arr.slice(-2)); // d,e
console.log(arr.slice(-1)); // e
console.log(arr.slice(1, -2)); // b,c

// --------------------------------------

// SPLICE
const months = ["jan", "march", "april", "june"];

months.splice(1, 0, "feb"); //jan,feb,march,april,june
months.splice(4, 0, "may");

console.log(months);
// --------------------------------------

// REVERSE
let arr2 = ["a", "b", "c", "d", "e"];
console.log(arr2.reverse());

// --------------------------------------

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

// --------------------------------------

// JOIN
console.log(letters.join("-"));

// --------------------------------------

// AT
arr = [22, 44, 34, 34, 55, 3234];
console.log(arr[1]);
console.log(arr.at(1));

// getting last value of array
console.log(arr.at(arr.length - 1));
// console.log(arr.slice(-1)); // returns array
console.log(arr.slice(-1)[0]);

console.log(arr[arr.length - 1]);

console.log(arr.at(-1));

// at works on string
console.log("Raj".at(-1));

// --------------------------------------

// LOOPING ARRAY: for-of, forEach
arr = [34, 45, 56, 76, 89];
for (const itm of arr) {
  console.log(itm);
}

// arr.entries = [
//     [0,34],
//     [1,45],
//     [2,56],
//     ...
// ]

// for (const a of arr.entries()) {
//   console.log(a);
// }

for (const [key, val] of arr.entries()) {
  console.log(key, val);
}

// ----------------------------------
// foreach with array

const txn = [20, 45, 45, -23, -44];

// txn.forEach((val,index,array)=>{});

txn.forEach((amt, i) => {
  // console.log(v, i);
  if (amt > 0) {
    console.log(`you have deposited the amount: ${amt} `);
  } else {
    console.log(`you have whithdrawn the amount: ${amt} `);
  }
});
// -------------------------------------

// foreach with Maps and Sets data structure

// MAP
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

// currencies.forEach(function (val,index,array) {});
currencies.forEach(function (v, i, arr) {
  console.log(v, i, arr);
});

// const currObj = {
//   USD: "United States Dollar",
//   EUR: "Euro",
//   GBP: "Pound Sterling",
// };

// Set
console.log("----------------------------");
const currenciesSet = new Set(["USD", "EUR", "GBP", "USD"]);

console.log(currenciesSet);

currenciesSet.forEach((v, _, arr) => {
  console.log(v);
});

// note : set doesn't have index , we can use _ (underscore) sign to throwaway index variable
