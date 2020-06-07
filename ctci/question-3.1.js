/*
3.1 Three in One: Describe how you could use a single array to implement three stacks.
Single array to hold three stacks 
Implement different push and pop methods: push1, push2, push3, pop1, pop2, pop3
Two indexes to start of second and third stacks, first stack always from the beginning
*/

let array = new Array();
//firstIndex = 0
let secondIndex = 0;
let thirdIndex = 0;

//The unshift() method adds one or more elements to the beginning of an array
function push1(value) {
    array.unshift(value);
    secondIndex++;
    thirdIndex++;
}

//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//If deleteCount is 0 or negative, no elements are removed. 
function push2(value) {
    array.splice(secondIndex, 0, value);
    thirdIndex++;
}

//The push() method adds one or more elements to the end of an array
function push3(value) {
    array.push(value);
}

function pop1() {
    var ele = array.splice(0, 1);
    secondIndex--;
    thirdIndex--;
    return ele[0];
}

function pop2() {
    var ele = array.splice(secondIndex, 1);
    thirdIndex--;
    return ele[0];
}

//The pop() method removes the last element from an array and returns that element. 
function pop3() {
    var ele = array.pop();
    return ele;
}

push1('1a');
push1('1b');
push2('2a');
push2('2b');
push3('3a');
push3('3b');
pop3();
pop2();
pop1();
push3('3b');
push2('2b');
push1('1b');

console.log(array);
