// ES6 Classes
// - more modern wy to do OOP in javascript, and alternative to constructor function syntax
// - ES6 Classes is a "SYNTACTIC SUGAR" only, behind the scene it is working exactly same as constructor function
// - ES6 classes is also first-class citizen, so it can be assing to a variable and can be retuned in function
// - class in js is not hoisted, so can not be called before it is decleared

const Person = class {
  constructor(name, dob) {
    this.name = name;
  }

  calcAge() {
    console.log(2023 - this.dob);
  }

  hi() {
    console.log(`hi ${this.name}`);
  }
};

const raj = new Person("raj", 2032);

console.log(raj);
