const rest = {
  name: "restaurant 1",
  guest: 0,
};

const rest2 = {
  name: "restaurant 2",
  guest: 20,
};

rest.guest = rest.guest || 10;
rest.guest ||= 10;

console.log(rest.guest);

rest.guest = rest.guest ?? 10;
rest.guest ??= 10;
console.log(rest.guest);

rest.name = rest.name && "new name";
rest.name &&= "new name";

console.log(rest.name);
let x = 10;
// x = x + 2;
x += 2;
