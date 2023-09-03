// Closure (bagPack)
// A function along with it's lexical(outer) scope, budled together is called closure

//A CLOSURE MAKES A FUNCTION REMEMBER ALL THE NECESSARY  VARIABLE, THAT EXISTED AT THE FUNCTION BIRTH PLACE
// A function has access to the varibale environment of the execution  context where the function created, even if the EC(execution context) has gone
// A Closure have priority over the scope chail

const secureBooking = function () {
  let bookId = 1; // bagpack item
  let x = "test";
  return function () {
    return ++bookId;
  };
};

const book = secureBooking();

console.log(book());
console.log(book());

console.dir(book);
