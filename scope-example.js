foo = 'f' // In non-strict mode, assumes you want to create a property named `foo` on the global object
//globalThis.hasOwnProperty('foo') // true
global.hasOwnProperty('foo') //in node

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

//The scope of a variable declared with var is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, 
//for variables declared outside any function, `global`.
var global1 = "global1";
//let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, 
//unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope. 
let global3 = "global3";
//This declaration creates a constant whose scope can be either global or local to the block in which it is declared. 
//Global constants do not become properties of the window object, unlike var variables.
const global4 = "global4";
//all about this
//In the global execution context (outside of any function), this refers to the global object
//console.log('this != globalThis', this != globalThis);
console.log('this == global', this == global);
console.log('global hasproperty global1', global.hasOwnProperty('global1'));
console.log('global hasproperty global3', global.hasOwnProperty('global3'));
console.log('global hasproperty global4', global.hasOwnProperty('global4'));
function f1() {
    console.log(this.global1);
    console.log(this.global3); //undefined
    console.log(this.global4); //undefined
    console.log(global3);
    console.log(global4);
    //Inside a function context, not in strict mode, the value of `this` will default to the global object
    console.log('inside function this == global', this == global);
    this.global5 = "global5";
}
f1();
f1({global1: 'passbyargs'});
console.log(this.global3);
console.log(this.global4);
console.log(this.global5); //global5

//Calling f.bind(someObject) creates a new function with the same body and scope as f
var g1 = f1.bind({global1: 'new function', global3: 'new function3', global4: 'new function4'});
g1(); //new function 

function outter(setOutter) {
    this.outter1 = 'outter1';
    var outter2 = 'outter2';
    function inner() {
        console.log('outter1', this.outter1);
        //inner1 = 'inner1'; //accessible from outside function
        //this.inner1 = 'inner1'; //accessible from outside function
        var inner1 = 'inner1'; //local only
        //let inner1 = 'inner1'; //local only
        //const inner1 = 'inner1'; //local only
        console.log('global hasproperty inner1', global.hasOwnProperty('inner1'));
        console.log('this hasproperty inner1', this.hasOwnProperty('inner1'));
        console.log('global hasproperty outter1', global.hasOwnProperty('outter1'));
        console.log('this hasproperty outter1', this.hasOwnProperty('outter1'));
        //console.log('this hasproperty outter2', this.hasOwnProperty('outter2')); //false
        console.log('closure can access outter function scope', outter2);
        if (setOutter) {
            this.outter1 = inner1;
        }
    }   
    inner();
}

outter();
outter(true);
console.log('this.inner1', this.inner1);
console.log('this.outter1', this.outter1);
