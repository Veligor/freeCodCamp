//Return a Sorted Array Without Changing the Original Array.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = [].concat(arr).sort((a, b) => a - b);
  return newArray;
  // Only change code above this line
}

nonMutatingSort(globalArray);

//Split a String into an Array Using the split Method

function splitify(str) {
  // Only change code below this line
  return str.split(/[^A-Za-z]/);

  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));

//Combine an Array into a String Using the join Method

function sentensifyOne(str) {
  // Only change code below this line
  let form = str.split(/[^A-Za-z]/);
  return form.join(" ");

  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));

