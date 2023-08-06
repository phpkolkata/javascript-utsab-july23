// Modern Operators (ES6)

// Array Destructuring - unpack array items into seperate variables

// ex1
const arr = [10, 20, 30];

// normal way
const a = arr[0];
const b = arr[1];
const c = arr[2];
// console.log(a);

// using array destructuring
let [x, y, z] = arr; // x=10,y=20,z=30
[x, y] = arr; // x=10,y=20
[x, , z] = arr; //x=10,z=30

// console.log(z);

// unpack return value from function
function order() {
  return ["bread", "butter"];
}

// const res = order();
const [res1, res2] = order();
console.log(res1);

// nested destructuring
const nested = [1, 2, 3, [5, 6]];
// const [i, j] = nested; // 1,2
const [i, , j, [m, p]] = nested; // 1,2
console.log(m);

// default values
const [o = 0, q = 5, r = 4] = [30, 40];
console.log(r); //30,40,4
