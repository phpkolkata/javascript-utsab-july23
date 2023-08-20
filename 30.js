// Array Vs Sets   and  Object vs Maps

// -- 4 types of data structure (Array, sets, object, map)

// ex :

const arr = ["a", "b", "c", "a"]; // array
const sets = new Set(["a", "b", "c", "a"]); //sets
// sets.add("x");

// console.log(arr);
// console.log(sets);

// object
const obj = {
  name: "raj",
  age: 20,
  friends: ["a", "b", "c"],
  hello: function () {},
};

// Map
const objMap = new Map([
  ["name", "raj"],
  ["age", "20"],
  ["friends", ["a", "b", "c"]],
]);

console.log(obj);
console.log(objMap.get("name"));
// Array vs Sets
// Array:
// -- use when you need ordered list of values (might contain duplicate values)
// -- use when you need to manipulate data

// Sets:
// -- use when you need to work with unique values
//  -- use whe high perpormance is really important
//  -- use to remove duplicate values from array

// ------------------------------------------------------------------

// Object vs Maps

// object:
// - traditional way to store data in key/value format
// - easier to write and access values using (. and []) sign
// use:
// --use when you need to include functions(method)
// -- use when you work with JSON (api format)

// Maps
// - better performance
// - key can have any data type
// - easy to iterate
// - easy to compute size
// use:
// --use when you simply need to map key to values in any data type
