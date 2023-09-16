// Topic : Setter and Getter (actually methods, but we treat like property)
// - setter and getter are basically a function/method, but we treat like property/varibale
// - every object in js can have setter and getter properties/method, and we call these special properties "ASSESSOR PROPERTIES"

class Account {
  constructor(name) {
    this.name = name;
    this.txn = [];
  }
  deposite(amt) {
    this.txn.push(amt);
  }
  summary() {
    console.log(this.txn);
  }

  getLatest() {
    console.log(this.txn.slice(-1));
  }

  get latest() {
    return this.txn.slice(-1);
  }

  set entry(amt) {
    this.txn.push(amt);
  }
}

const obj = new Account("raj");
// obj.deposite(20);
// obj.deposite(50);
// obj.deposite(80);
// obj.getLatest();

obj.entry = 39;
obj.entry = 50;

obj.summary();
console.log(obj.latest);
