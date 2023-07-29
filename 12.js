// Object
// {} - Object litral
// Objects - you can store multiple values, just like array, but with user-defined names, instead of keys(0,1,2)

// array example
const rajArray = ["raj", "kumar", 22, "teacher", ["suman", "pradip", "sanjay"]];
// console.log(rajArray[4][0]);
console.log(rajArray[0]);

// object example
const rajObj = {
  fname: "raj",
  lname: "kumar",
  age: 22,
  job: "teacher",
  friends: ["suman", "pradip", "sanjay"],
};

// Dot vs Bracket
// console.log(rajObj.fname);
let n = "name";
console.log(rajObj["f" + n]);
console.log(rajObj["l" + n]);
// ------------------------------------------------------

const qry = prompt("what do you want to know about RAJ?");

// console.log(rajObj.qry);
console.log(rajObj[qry]);
