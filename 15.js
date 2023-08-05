// this keyword/variable
// - special variable which is created for every execution context (EC), ex- every function
// - either takes the value, or points to its owner
// - "this" is not static, it is dynamic, it depends on how th function is being called, or value assigned

// Lexical Scope - Outer Scope

var name = "Suman";

// ex 1
const std = {
  name: "Raj",
  sayHello: function () {
    console.log(`Hello ${this.name}`); // "this" referes to the object, that will call this method
  },
};

// std.sayHello(); //so std=this
// console.log("test", this);
// -------------------------------------------------------------------
// ex 2
const std2 = {
  name: "raj",
  hello: function () {
    console.log(`Hello ${this.name}`); // it will work, coz regular function will find the scope from its caller
  },
  hi: () => {
    console.log(`Hi ${this.name}`); // IT WILL NOT WORK, COZ ARROW FUNCTIONS DON'T HAVE "this" SCOPE
  },
};

// std2.hello(); // hi raj
// std2.hi(); // HI sUMAN - lexical scoping (Outer Scope , ex - WINDOW)
//---------------------------------------------------------------------------
// ex 3
const std3 = {
  name: "asif",
  hello: function () {
    console.log("hello", this); // this = std3
    const bye = function () {
      console.log("bye", this); // this = window
    };
    bye();
  },

  hi: () => {
    console.log("hi", this); // this = winoow
  },
};

// std3.hello();
// std3.hi();
// --------------------------------------------------------
// ex 3 solutions 1
const std4 = {
  name: "asif",
  hello: function () {
    console.log("hello", this.name);
    const self = this; // localize this into self var
    const bye = function () {
      console.log("bye", self.name);
    };
    bye();
  },

  hi: () => {
    console.log("hi", this);
  },
};

// std4.hello();
// std4.hi();
//----------------------------------------------------------------

// ex 3 solutions 2
const std5 = {
  name: "asif",
  hello: function () {
    console.log("hello", this.name);
    const bye = () => {
      console.log("bye", this.name);
    };
    bye();
  },

  hi: () => {
    console.log("hi", this);
  },
};

std5.hello();
std5.hi();
//------------------------------------------------
