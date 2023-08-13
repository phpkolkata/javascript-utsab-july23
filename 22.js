// Topic - Short Circuiting ( AND - OR )

// - We think, logical operator always returns boolean value
// WRONG - it can return any data type
// Also, it can do short circuiting - just link in electricity

// ex -
// NOTE: OR operator - simply returns the firt TRUTHY value of all oprands, else returns last value

console.log(3 || "raj"); // 3
console.log(null || "raj"); // raj
console.log(false || null); // null

// note - short circuiting - how it worked: "OR" operator looks for TRUTHY value, if found, it return with the TRUTHY value,
// and wont' check next value,
// if not found, it return the last value for sure

// more ex
console.log("" || "raj"); // raj
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || "" || 0 || "raj" || 23 || null); // raj
// ------------------------------------------------------

const me = {
  name: "raj",
};

// if (me.age) {
//   age = me.age;
// } else {
//   age = 0;
// }

// const age = me.age ? me.age : 0; //turnary op

const age = me.age || 0; // or op chort circuit

//------------------------------------------------------
