// Object Looping - key,values,entries
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

// console.log(Object.keys(rest));
// console.log(Object.values(rest));
// console.log(Object.entries(rest.openHours));

// for (const key of Object.keys(rest)) {
//   console.log(key);
// }

// [sun, {}][(mon, {})][(tue, {})] = Object.entries(rest.openHours
for (const [key, val] of Object.entries(rest.openHours)) {
  //   console.log(key, val);
}

for (const [key, { open, close }] of Object.entries(rest.openHours)) {
  console.log(key, open, close);
}

for (const [key, { open: openTime, close: closeTime }] of Object.entries(
  rest.openHours
)) {
  console.log(key, openTime, closeTime);
}
