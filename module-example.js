//https://nodejs.org/docs/latest-v10.x/api/modules.html
//nodejs 10 doesn't support export yet 
//import addTwoNumbers from './module1.js';

const module1 = require('./module1.js');
let num1 = 1;
let num2 = 2;

console.log(module1.addTwoNumbers(num1, num2))
