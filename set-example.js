//es 2015
//http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));

set1.add(2);
console.log('has(2)', set1.has(2));
console.log('set1 size', set1.size);

let sum = 0;
set1.forEach(ele => sum += ele);
console.log('set sum', sum);

const set2 = new Set(["12", "23"])
console.log(set2.has("12"))
