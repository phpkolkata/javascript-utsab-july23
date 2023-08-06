// Object Destructuring

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
  },
};

// console.log(rest);

// Object destructuring just like array destr......
// it needs to be same property name to destruct
// also, property order is NOT important

// const { mainCourse, name, openHours } = rest;
// console.log(mainCourse, name, openHours);

// destructuring with customized property name
// const {
//   mainCourse: mainItem,
//   name: restuarantName,
//   openHours: openingHours,
// } = rest;
// console.log(mainItem);

// default value
// const { mainCourse = [], name = "no name", openHours = {} } = rest;
// console.log(name);

// nested object destructruing
// const {
//   openHours: {
//     sun: { open, close },
//   },
// } = rest;
// console.log(open, close);

// break way
const { openHours } = rest;
const { sun } = openHours;
const { open, close } = sun;

console.log(open, close);

// function with destructure object
function order() {
  return { name1: "bread", name2: "butter" };
}
const { name1, name2 } = order();
