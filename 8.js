// Type Coercion - Javascript automatically(implicitly) converts types behind the scene for us

// Type coercion in case of boolean value happens in 2 situations
// 1. logical context, if(condition)
// 2. logical operators, (and, or, !)

// ex1
const money = 0; //falsy value
if (money) {
  console.log("don't spend it all");
} else {
  console.log("earn some");
}

// ex2 string coercion
console.log("hello my age is " + 23); // will convert 23 into string
