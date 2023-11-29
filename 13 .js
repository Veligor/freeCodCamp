//Import a Default Export

import subtract from "./math_functions.js";
// Only change code above this line

subtract(7, 4);

//Create a JavaScript Promise

const makeServerRequest = new Promise((resolve, reject) => {});

//Complete a Promise with resolve and reject

const makeServerRequestOne = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data")
  } else {  
    reject("Data not received")
  }
});

//Handle a Fulfilled Promise with then

const makeServerRequestTwo = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
//result происходит из аргумента, переданного методу resolve. 
makeServerRequest.then(result => {
  console.log(result)
})

//Handle a Rejected Promise with catch

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error)
})