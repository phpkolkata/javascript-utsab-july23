// Object Litrals - {}
// advance use of Object litral

const friends = [
  { name: "a", age: 11 },
  { name: "b", age: 12 },
  { name: "c", age: 13 },
];

// const me = {
//   name: "raj",
//   age: 22,
//   friends: friends,
// };

const me = {
  name: "raj",
  age: 22,
  friends, // if property and value var is same, use one, it will take both automatically
};

// console.log(me);
// -------------------------------

// similar example with funcitons
// const me2 = {
//   name: "raj",
//   age: 20,
//   hello: function () {
//     console.log("hello");
//   },
// };

const me2 = {
  name: "raj",
  age: 20,
  hello() {
    console.log("hello");
  },
  [`test-${5 - 3}`]: "working",
};

me2.hello();
// ----------------------------------------
// Computed property names under [] square bracket

const me3 = {
  name: "raj",
  age: 20,
  hello() {
    console.log("hello");
  },
  [`test-${5 - 3}`]: "working",
};
console.log(me3);
