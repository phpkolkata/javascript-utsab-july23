// 3 ways to implement prototypal inheritance in js
// 1. constructor function
// 2. ES6 Classes
// 3. Object.create

const Person = function (name, dob) {
  this.name = name;
  this.dob = dob;
  console.log(this);
};

const raj = new Person("raj", "1933");

// {}
// this = {}
// prototype decide
// return function
// console.log(raj);

// what the new keyword does:
// - new empty object {} created
// - next, the func will be called and "this" keyword will be assigned to empty object
// - the empty object will be linked to Object.prototype using specail property (__proto__)
// ex : const raj = new Person("raj", "1933");
//  - the object will be return fromt the constructor function call
