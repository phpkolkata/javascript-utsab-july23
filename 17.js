// primitive type vs Object type

// - Primitive types store data into STACK (compiler stack)
// - Object types stores data in Heap Memory

// ex 1 Primitive type
let age = 30;
let oldage = age;
age = 31;

//Stack
// age = 30;
// oldage = 30;
// age = 31;

console.log(age); //31
console.log(oldage); //30

// ------------------------
// ex 2 Object type
const me = {
  name: "raj",
  age: 30,
};

const frnd = me;
me.age = 31;
console.log(me.age); //31
console.log(frnd.age); //31
// ---------------------------
// note: we can copy object to a new memory
const raj = { age: 20 };
const suman = Object.assign({}, raj); //raj
raj.age = 30;
console.log(suman);
// --------------------------------

const std = {
  name: "raj",
  age: 20,
  friends: ["a", "b", "c"],
};

// const std2 = Object.assign({}, std);
const std2 = { ...std };
// std.age = 30;
console.log(std2.age); //20

std.friends.push("d");
console.log(std2.friends);
