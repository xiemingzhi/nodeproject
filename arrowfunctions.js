//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//Point 1:
//before arrow functions
function PersonA() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

//   setInterval(function growUp() {
//     // In non-strict mode, the growUp() function defines `this`
//     // as the global object (because it's where growUp() is executed.),
//     // which is different from the `this`
//     // defined by the Person() constructor.
//     this.age++;
//   }, 1000);
    setTimeout(function growUp() {
        this.age++;
        console.log('before timeout age', this.age);
    }, 1000);
}
  
var p = new PersonA();
console.log('before arrow functions age', p.age);

//An arrow function does not have its own this. The this value of the enclosing lexical scope is used; 
function PersonB() {
  this.age = 0;

    //Schedules repeated execution of callback every delay milliseconds.
    // setInterval(() => {
    //     this.age++; // |this| properly refers to the Person object
    //     console.log('after delay age', this.age);
    // }, 1000);

    //Schedules execution of a one-time callback after delay milliseconds.
    setTimeout(() => {
        this.age++; // |this| properly refers to the Person object
        console.log('after timeout age', this.age);
    }, 1000);
}
  
var p = new PersonB();
console.log('after arrow functions age', p.age);

/*
Point 2:
TypeError: Person2 is not a constructor
cannot use arrow functions as constructors
*/
// const Person2 = (firstName, lastName, age) => {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// const me = new Person2('ming', 'hsieh', 99);

//Point 3:
//arrow function expressions are best suited for non-method functions. 
//DONOT DONT DO THIS
var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
      console.log(this.i, this);
    }
}
  
obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
  