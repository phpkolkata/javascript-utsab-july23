// Type Conversion - is explicityly(manually) converted from one type to another type. Basically we can convert only 3 type.
//  - Number()
//  - String()
//  - Boolean()

// ex
const inputYear = "1991";

// console.log(inputYear + 20);
// console.log(Number(inputYear) + 20);
//console.log(+inputYear + 20); // shortcut
// console.log(typeof Number(inputYear));

// console.log(Number("raj")); // NAN
//console.log(String(22)); // "22"

// ---------------------------------------

console.log(Boolean("a")); //true
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean({})); //true
console.log(Boolean("")); // false

// Value nature could be 2 types, either TRUTHY or FALSY
// - 5 falsy values - 0, '', undefined, null, NaN
