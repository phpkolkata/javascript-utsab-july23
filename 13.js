const rajObj = {
  fname: "raj",
  lname: "kumar",
  birthYear: 1986,
  job: "teacher",
  friends: ["suman", "pradip", "sanjay"],
  hasLicense: true,
  //   calAge: function () {
  //     return 2023 - this.birthYear;
  //   },
  calAge: function () {
    this.age = 2023 - this.birthYear;
  },
  summary: function () {
    return `hello ${this.fname} ${this.lname}, you are a ${
      this.job
    }, and you have ${this.hasLicense ? "a" : "no"} license`;
  },
};

rajObj.location = "kolkata";
rajObj["email"] = "raj@gmail.com";

console.log(rajObj);

// let age = rajObj.calAge();
// console.log(age);

rajObj.calAge();
console.log(rajObj.age);
console.log(rajObj.summary());

let x = 10;
console.log(window);
