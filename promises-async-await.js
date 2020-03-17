//import axios from "axios";
const axios = require('axios');

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
//This symmetry with asynchronous code culminates in the async/await syntactic sugar in ECMAScript 2017
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

//The purpose of async/await is to simplify using promises synchronously, and to perform some behavior on a group of Promises. 
async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}
  
//make async api call
asyncCall();

async function asyncAPICall() {
  const result = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
  console.log('asyncapicall data', result.data);
}

asyncAPICall();