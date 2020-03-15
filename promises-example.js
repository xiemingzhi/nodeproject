//es6 ecmascript 2015 
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

callAPIAsync.then(successCallback, failureCallback);

console.log("Finish Setup")
//promises can be chained 
//also use catch to handle errors/default case
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise