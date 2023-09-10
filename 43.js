// creating method inside CONSTRUCTOR FUNCTION IS BAD PRACTICE
// coz the more we create object of Person, this calcAge will be copied to that object, which will slow down the process.
// so same method copying for seperate object is bad,
// we should copy common method into its prototype

const Person = function (name, dob) {
  this.name = name;
  this.dob = dob;
  //   this.school = "ABC school";

  //   this.calAge = function () {
  //     console.log(2023 - this.dob);
  //   };
};

// injecting method to parant prototype
Person.prototype.calAge = function () {
  console.log(2023 - this.dob);
};
Person.prototype.school = "ABC school";

Person.prototype.hi = function () {
  console.log(`hi ${this.name}`);
};

const obj = new Person("raj", 1981);
const obj2 = new Person("suman", 1951);

console.log(obj);
console.log(obj2);

obj.calAge();
obj.hi();

// class Student{
//     name =null;
//     dob = 0;
//     function __construct(name,dob){
//         this.name = name;
//         this.dob = dob;
//     }
//     function calcAge(){
//         console.log(2023 - this.dob);
//     }
// }
