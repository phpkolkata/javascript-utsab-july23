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
const strArr = str.split(" ");
const wordArr = [];
for (const w of strArr) {
  // 1 way
  // wordArr.push(w[0].toUpperCase() + w.slice(1).toLowerCase());
  // 2 way
  wordArr.push(w.replace(w[0], w[0].toUpperCase()));
}
const finalstr = wordArr.join(" ");

console.log(finalstr);

// hw2 - camel case
// output - helloWorld myDearFriend goGetIt thisIsLastTry
const snakestr = "hello_world my_dear_friend go_get_it this_is_last_try";

const arr = snakestr.split(" ");
const res = [];
for (const w of arr) {
  const wArr = w.split("_");
  const words = [];
  for (const w2 of wArr) {
    words.push(w2[0].toUpperCase() + w2.slice(1));
  }
  res.push(words);
}

let camelStr = "";
for (const r of res) {
  r[0] = r[0].toLowerCase();
  camelStr += r.join("") + " ";
}
console.log(camelStr);
// -----------------------------------
