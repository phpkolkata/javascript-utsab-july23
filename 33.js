// -------------------------------------------------

// padding - mask on string
const msg = "hello there";
console.log(msg.padStart(20, "."));
console.log(msg.padEnd(20, "."));

const maskCreditCard = function (number) {
  //   const str = number.toString();
  const cc = number + ""; // convert into string to run slice() method
  const last = cc.slice(-4);
  //   console.log(last);
  console.log(last.padStart(cc.length, "*"));
};

maskCreditCard(123456789);
// --------------------------------------
// Repeat
const msg2 = "hello there";
console.log(msg2.repeat(4));

// Note: You can search MDN for more string related methods as required

// ------------------------------------------
// hw 1
// each word first latter capital
const str = "hello this is normal word"; // Hello This Is Normal Word

// hw2 - camel case
// output - helloWorld myDearFriend goGetIt thisIsLastTry
const snakestr = "hello_world my_dear_friend go_get_it this_is_last_try";
// -----------------------------------
