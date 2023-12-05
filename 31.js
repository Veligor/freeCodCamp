//Return Largest Numbers in Arrays

function largestOfFour(mainArray) {
  return mainArray.map(function (subArray) {
    return Math.max.apply(null, subArray);
  });
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

//Confirm the Ending

function confirmEnding(str, target) {
  var newStr = "";
  newStr = str.substring(str.length - target.length);
  return newStr === target;
}
function confirmEnding(string, target) {
  if (string.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");

//Repeat a String Repeat a String
