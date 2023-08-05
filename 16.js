// Arguments Keyword

// - "arguments" keyword is special keyword, available to declearation function and regular function
// - "arguments" keyword is not available in Arrrow Function

// regular function
function hi(x, y) {
  console.log(arguments);
}

hi(10, 30, 38);

// expression funciton
const bye = function (x, y) {
  console.log(arguments);
};
bye(40, 49);

// arrow function
const hello = (x, y) => {
  console.log(arguments);
};

// hello(40, 50);

// modern javascript allows to pass arguments like array using ...

const test = (...args) => {
  console.log(args);
};

test(49, 59, 39, "as");
