// ex -
// NOTE: AND operator - simply returns the firt FALSY value of all oprands, else returns last value

console.log("raj" && 0); // 0
console.log(0 && "raj"); //0

console.log(7 && "raj" && null && 0);

const me = {
  name: "raj",
  hello2: function (nm) {
    console.log("hello ", nm);
  },
};

// if (me.hello) {
//   me.hello();
// }

me.hello && me.hello("raj");

// ---------------------------
