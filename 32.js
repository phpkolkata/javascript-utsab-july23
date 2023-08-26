// string examples

const passanger = "sUreSh"; //Suresh
const passangerLower = passanger.toLowerCase();
// console.log(passangerLower);
// console.log(passangerLower.slice(0, 1));
const passangerCorrectName =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);

console.log(passangerCorrectName);

// ------------------
// normalizing string
const email = "raj@gamil.com";
const userEmail = "Raj@gmail.com ";
normalizeEmail = userEmail.toLowerCase().trim();
// ---------------------
// replacing
const usPrice = "277.98$";
const indPrice = usPrice.replace("$", "Rs").replace(".", ",");
console.log(indPrice);

const announcment =
  "All passengers come to boarding door 23, boarding door 23!";
// console.log(announcment.replace("door", "gate").replace("door", "gate"));
console.log(announcment.replaceAll("door", "gate"));

// ----------------------------
// includes,startWith,endsWith   - return boolean
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.startsWith("Air"));
console.log(plane.endsWith("neo"));

// hw
const checkBaggage = function (items) {
  const bags = items.toLowerCase();

  // invalid items list =
  const invaliditems = ["knife", "gun", "nail cutter"];
  for (const i of invaliditems) {
    if (bags.includes(i)) {
      return "invalid";
    }
  }
  return "valid";
};

// prohibitedItems = "knife", naile cutter, ....""
const result1 = checkBaggage(
  "i have a laptop, nail Cutter and i have also a small knife"
); //disallow
const result2 = checkBaggage(
  "i have a laptop, comb and i have also a small purse"
); //allow

console.log(result1, result2);
