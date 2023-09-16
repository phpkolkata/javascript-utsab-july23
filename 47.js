const account = {
  name: "Raj",
  txn: [30, 405, 50],

  get latest() {
    return this.txn.slice(-1);
  },
  set entry(amt) {
    this.txn.push(amt);
  },
};

account.entry = 40;
account.entry = 47;

console.log(account.latest);
