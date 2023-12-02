// Combine Arrays with the Spread Operator

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}

console.log(spreadOut());

//  Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//  Iterate Through All an Array's Items Using For Loops

 function filteredArray(arr, elem) {
   let newArr = [];
   // change code below this line
   for (let i = 0; i < arr.length; i++) {
     if (arr[i].indexOf(elem) === -1) {
       newArr.push(arr[i]);
     }
   }
   // change code above this line
   return newArr;
 }
 
 
 console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));