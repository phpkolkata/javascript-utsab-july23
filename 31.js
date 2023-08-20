// working with string
const airline = "Indian Airlines";
const plane = "A320";

// we can get string value like array
console.log(plane[0]);
console.log(plane[1]);
console.log(plane.length); //so we can use array length method like array

console.log(airline.indexOf("Air"));
console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("i"));

console.log(airline.slice(7));
console.log(airline.slice(0, 6));

console.log(airline.slice(0, airline.indexOf(" ")));

console.log(airline.slice(-2)); //es
console.log(airline.slice(1, -2));

// 11a
// 12x
// 13y

const checkMiddleSeat = function (seat) {}; // hw

checkMiddleSeat("22h");
