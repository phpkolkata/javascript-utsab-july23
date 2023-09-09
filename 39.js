// Map, Reduce, Filter ( 3 Data Transormation methods)

// Map: the map() method creates a new array populated with the results of provided data, by running on every elements in the calling array

const arr1 = [1, 4, 5, 8];

// const res1 = arr1.map(function (item) {
//   return item * 2;
// });
const res1 = arr1.map((item) => item * 2);

console.log(res1);

// --------------------------

// reduce() method is to return single/calculated value from array

const arr2 = [2, 3, 4, 5];

// arr2.reduce(function (pre, cur) {
//   return pre + cur;
// }, 0);

const res2 = arr2.reduce((preVal, curVal) => preVal + curVal, 0);
console.log(res2);
// -------------------------------------

// filter: creates a new array with thoes elements wo passes the test/condition (true/false)
const words = ["hello", "hi", "suman", "bye"];
// const filterd = words.filter((item) => item.length > 2);
// console.log(filterd);

const filterd2 = words.filter(function (item) {
  return item.length > 2;
});
console.log(filterd2);
