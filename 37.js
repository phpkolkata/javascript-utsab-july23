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
