// Rest Pattern - Packs the iterables
// -- Rest operator is just opposite of SPREAD OPERATOR.
// -- Spread is used to unpack array elements, and Rest is used to pack values into array
// -- They both share same DOT(...) syntax
// -- NOTE: if ... is on left side of EQUAL(=) sign, it is rest pattern
// -- NOTE: if ... is on right side of EQUAL(=) sign, it is spread operator

// ex- Destructuring
// -----------------
//  with SPREAD Operator
const arr = [1, 2, 3, ...[4, 5]];
console.log(arr); // 1,2,3,4,5

//  with REST Operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(others); // 3,4,5
//-----------------------------------------

// with object
const rest = {
  name: "abc restuarant",
  type: "non-veg",
  mainCourse: ["a", "b", "c"],
  starter: ["x", "y", "z"],
  openHours: {
    sun: {
      open: "11am",
      close: "10pm",
    },
    mon: {
      open: "12noon",
      close: "10pm",
    },
    tue: {
      open: "12noon",
      close: "10pm",
    },
  },
};

const { sun, ...otherHours } = rest.openHours;
// console.log(sun, otherHours);
console.log(otherHours.tue.open); // 12noon
//------------------------------------

// with function (rest parameteres/arguments)
const hello = function (...name) {
  console.log("hello ", name);
};
hello("raj", "suman", "abc"); // can take any number of parameter, coz rest pattern used in parameter defining
// ---------------------------------------

const hello2 = function (name1, name2) {
  console.log("hello", name1, name2);
};

const arr2 = ["raj", "suman"];
hello2(...arr2); // spread op
