// Prevent Infinite Loops with a Valid Terminal Condition

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

//Use an Array to Store a Collection of Data

let yourArray = ["you line", 7, true, false, 5, 3];

//Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "Is alright"
// Only change code above this line
console.log(myArray);

//Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
  // Only change code below this line
arr.unshift('I', 2, 'three')
arr.push(7, 'VIII', 9)
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));