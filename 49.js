class Person {
  constructor(age) {
    // this.fullname = fullname;
    this.age = age;
  }

  set fullname(name) {
    if (name.includes(" ")) {
      this._fullname = name;
    } else {
      alert("not a full name");
    }
  }

  get fullname() {
    return this._fullname;
  }
}

const obj = new Person(44);
obj.fullname = "raj kumar";
console.log(obj.fullname);
