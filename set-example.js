//es 2015
//http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));

const set2 = new Set(["12", "23"])
console.log(set2.has("12"))
