// Optional Chain (Obje.prop?.prop)

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

console.log(rest?.openHours?.sat);
