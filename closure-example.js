//a closure gives you access to an outer function’s scope from an inner function. 
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log("makefunc", name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

//=======================================================================
//function factory - function to create other functions
function makeAdder(x) {
  console.log("makeadder", x);
  return function(y) {
    console.log("inner function", y);
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
console.log(makeAdder(5)(2)); // 5 + 2
console.log(makeAdder(10)(2)); // 10 + 2

//=======================================================================
//encapsulation
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
};

var counter1 = makeCounter();
var counter2 = makeCounter();

console.log(counter1.privateCounter) //undefined
console.log('counter1',counter1.value()); // 0.
console.log('counter2',counter2.value()); // 0.

counter1.increment();
console.log('counter1',counter1.value()); // 1.
console.log('counter2',counter2.value()); // 0.

