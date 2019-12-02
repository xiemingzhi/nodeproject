//https://nodejs.org/docs/latest-v10.x/api/modules.html
//nodejs 10 doesn't support export yet 
//use exports and const require
// export default addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }

exports.addTwoNumbers = (num1, num2) => num1 + num2;

