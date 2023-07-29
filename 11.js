// Array
// [] - array litral

// array using array funciton
// const friends = new Array("raj", "suman", "sanjay");

// array using array litrals
const friends = ["raj", "suman", "sanjay", 30, true];

friends.push("xyz");
friends[0] = "pradip";

// friends = ["jay"];

console.log(friends);
// console.log(friends.length);

console.log(friends[1]);

// ----------------------------------------

const calcAge = function (yob) {
  return 2023 - yob;
};

const yrs = [1981, 1985];

// console.log(calcAge(yrs)); // NaN
// console.log(calcAge(yrs[1]));

// console.log(calcAge(yrs[2 - 2]));
console.log(calcAge(yrs[yrs.length - 1]));
