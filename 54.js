//Manipulate Arrays With push Method

const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

//Manipulate Arrays With pop Method

// Setup
const myArra = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray.pop()
// Only change code below this line

//Manipulate Arrays With shift Method

// Setup
const myAray = [["John", 23], ["dog", 3]];
let removeFromMyArray = myArray.shift();
// Only change code below this line

//Manipulate Arrays With unshift Method

// Setup
const myArr = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35])

//Shopping List

const myList = [["ice cream", 7], ["banana", 10], ["strawberry", 2], ["orange juice", 5], ["grape", 4]];

//Write Reusable JavaScript with Functions

function reusableFunction() {
   console.log("Hi World")
 }
 reusableFunction()

 //Passing Values to Functions with Arguments
 function functionWithArgs (a, d) {
   //let result = a + d; 
    console.log(a + d)
   }
   functionWithArgs(4,5)