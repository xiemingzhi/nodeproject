// antipattern
global1 = "global1"; // global variable same as -> var global1 = "global1";
global2 = "global2"; // global variable
function func_bad() {
    //A closure is a function that remembers its outer variables and can access them. In JavaScript, all functions are naturally closures.
    console.log(global1); // "global1"
    console.log(global2); // "undefined" due to the1 var below
    var global2 = "local"; // This rescopes global2 inside this function
    console.log(global2); // "local"
    console.log(this.global2); //global2
}
func_bad();

// the preceding code snippet will behave as if it were implemented like so:
global1 = "global1"; // global variable
global2 = "global2"; // global variable
function func() {
    // This still rescopes, but it1 is a lot more explicit
    var global2; // same as -> var global2 = undefined;
    console.log(global1); // "global"
    console.log(global2); // "undefined"
    global2 = "local";
    console.log(global2); // "local"
    console.log(this.global2); //global2
}
func();

//let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, 
//unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope. 
let global3 = "global3";
//This declaration creates a constant whose scope can be either global or local to the block in which it is declared. 
//Global constants do not become properties of the window object, unlike var variables.
const global4 = "global4";
//all about this
function f1() {
    console.log(this.global1);
    console.log(this.global3); //undefined
    console.log(this.global4); //undefined
}
f1();
f1({global1: 'passbyargs'});
console.log(this.global3);
console.log(this.global4);

//Calling f.bind(someObject) creates a new function with the same body and scope as f
var g1 = f1.bind({global1: 'new function', global3: 'new function3', global4: 'new function4'});
g1(); //new function 
