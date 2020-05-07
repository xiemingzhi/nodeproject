//es6 ecmascript 2015 
//a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
//Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise respectively. 
let callAPIAsync = new Promise((resolve, reject) => {
    // make API call
    let success = true //false
    setTimeout( function() {
      //if success call resolve 
      if (success) {
        resolve("Success!")  // Yay! Everything went well!
      }//else call reject
      else {
        reject("Failure")
      }
    }, 250) 
  }) 

let successCallback = (successMessage) => {
    console.log("successCallback " + successMessage) 
  }

let failureCallback = (failureMessage) => {
    console.log("failureCallback " + failureMessage) 
  }

//Callbacks will never be called before the completion of the current run of the JavaScript event loop.
callAPIAsync.then(successCallback, failureCallback);

console.log("Finish Setup")
//promises can be chained 
//also use catch to handle errors/default case
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

//https://developers.google.com/web/fundamentals/primers/promises#error_handling
//error handling
//With then(func1, func2), func1 or func2 will be called, never both. 
//i.e if error occurs in successCallback, failureCallback will not be called
//Promise rejections skip forward to the next then() with a rejection callback (or catch(), since it's equivalent). 
//with then(successCallback).catch(failureCallback) successCallback will be executed and if error, skip next then(), and will call failureCallback

let problemSuccessCallback = (successMessage) => {
  throw Error('problem in successcallback') 
}
callAPIAsync.then(problemSuccessCallback).catch(failureCallback);
console.log("Finish Setup2")
