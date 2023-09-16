class Person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }

  get fullname() {
    return this.fname + " " + this.lname;
  }
}

const obj = new Person("Raj", "Kumar", 44);

// obj.fname + obj.lname;

obj.fullname; // raj kumar
