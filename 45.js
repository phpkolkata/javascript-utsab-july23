const arr = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(arr.at(1));

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const arr2 = [2, 3, 4, 3, 4];

console.log(arr2.unique());
