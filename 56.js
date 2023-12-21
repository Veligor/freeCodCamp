//Global vs. Local Scope in Functions

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

//Understanding Undefined Value returned from a Function
// Setup
let sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive() {
  sum += 5;
}
// Only change code above this line
addThree();
addFive();

//Assignment with a Returned Value
// Setup
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7);



