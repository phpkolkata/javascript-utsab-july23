// this keyword/variable
// - special variable which is created for every execution context (EC), ex- every function
// - either takes the value, or points to its owner
// - "this" is not static, it is dynamic, it depends on how th function is being called, or value assigned

var name = "test";

const std = {
  name: "Raj",
  sayHello: function () {
    console.log(`Hello ${this.name}`); // "this" referes to the object, that will call this method
  },
};

std.sayHello(); //so std=this
