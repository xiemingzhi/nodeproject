//es6 ecmascript 2015 
//a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
//Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise respectively. 
let callAPIAsync = new Promise((resolve, reject) => {
    // make API call
    //if success call resolve 
    setTimeout( function() {
      resolve("Success!")  // Yay! Everything went well!
    }, 250) 
    //else call reject
  }) 

let successCallback = (successMessage) => {
    console.log("Yay! " + successMessage) 
  }

let failureCallback = (failureMessage) => {
    console.log("Error " + failureMessage) 
  }

//Callbacks will never be called before the completion of the current run of the JavaScript event loop.
callAPIAsync.then(successCallback, failureCallback);

console.log("Finish Setup")
//promises can be chained 
//also use catch to handle errors/default case
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise