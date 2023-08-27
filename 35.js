// call, applly , bind

// Call Method: you can borrow methods from another object

const airIndia = {
  name: "AI",
  bookings: [],
  book(passanger, seatNum) {
    const seat = this.name + ":" + seatNum;
    this.bookings.push(passanger, seat);
  },
};

const indigo = {
  name: "IN",
  bookings: [],
};

airIndia.book("raj", "12");
airIndia.book("suman", "13");

console.log(airIndia.bookings);

// simple method
// indigo.book = airIndia.book; // virtual copying into indigo object
// indigo.book("zafer", "33");

// Call method syntax
// source.method.call(<new scope>, args....)
// airIndia.book.call(indigo, "zafer", "33"); // borrowing temporarily as per ES6

// Apply method : is same as call(), but it takes second args as array of args
// source.method.call(<new scope>,[args])
// airIndia.book.apply(indigo, ["zafer", "33"]); // borrowing temporarily as per ES6

// Bind Method : does same, but the difference is , it returns a funciton
// const indigoBook = airIndia.book.bind(indigo);
// indigoBook("zaf", "44");

// const indigoBook = airIndia.book.bind(indigo, "noName");
// indigoBook("55");
// const indigoBook = airIndia.book.bind(indigo, "noName", "44");
// indigoBook();

// airIndia.book.bind(indigo)("dd", "44");
// airIndia.book.bind(indigo, "dd")("44");

console.log(indigo.bookings);
