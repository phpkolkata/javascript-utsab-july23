// Nullish Coalecing (??)  - it looks ONLY FOR NULLISH VALUE, not falsy value
// falsy value - null, undefined, '', 0
// nullish value - null, undefined

const age = 0;

console.log(age || 18);
console.log(age ?? 18);
