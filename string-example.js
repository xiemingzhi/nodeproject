strx = '121';

console.log(strx.length);
console.log(strx[2]);

strx = '-121';
console.log(strx.substring(1, strx.length));

strx = '100';
strx = '1001';
//There are two ways to create a RegExp object: a literal notation and a constructor.
//- The literal notation's parameters are enclosed between slashes and do not use quotation marks.
//- The constructor function's parameters are not enclosed between slashes but do use quotation marks.
console.log(strx.replace(/[0]*$/, ''))

// a* a+ a?	0 or more, 1 or more, 0 or 1
// \w \d \s	word, digit, whitespace
// \W \D \S	not word, digit, whitespace
// \w or \W only matches ASCII based characters; for example, a to z, A to Z, 0 to 9, and _.
str = "words and 987"
//str = "987 words and"
let re = /^([a-zA-Z])+/
if (str.match(re)) console.log('starts with ascii character', str)  
//keep alphanumeric characters
var a = 'Test123*** TEST';
var b = a.replace(/[^a-z0-9]/gi,'');
console.log('alphanumeric only', b);

var palistr = "taco cat";
//console.log('replaceall spaces', palistr.replaceAll(' ', '')); //replaceAll is not a function
console.log('replace global', palistr.replace(/ /g, ''));

const greeting = '   Hello world!   ';
console.log(greeting.trimStart());

//Adding two numbers, will return the sum, but adding a number and a string will return a string
strx = '' + 1;
console.log('convert to string', typeof(strx))
strx = 1 + '';
console.log('convert to string', typeof(strx))
strx = "2" + 5 + 6;
console.log('strx=', strx);//256
strx = 2 + 5 + "6";
console.log('strx=', strx);//76

//intx = 1 + '0'; //string
intx = 1; //number
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus
//The unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already. 
//+true  // 1
//+false // 0
//+null  // 0
intx = +'0';
console.log('convert to int', typeof(intx), 'value', intx)

//string primitive vs String object
let s_prim = 'foo'
let s_obj = new String(s_prim)

console.log(typeof s_prim) // Logs "string"
console.log(typeof s_obj)  // Logs "object"

str = 'abc'
console.log(str.slice(1))
console.log(str.slice(2))