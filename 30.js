// Reverse a String

function reverseString(str) {
  return (str = [...str].reverse().join(""));
}

reverseString("hello");

//Factorialize a Number

function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

factorialize(5);

//Find the Longest Word in a String

function findLongestWordLength(str) {
  let arr = str.split(" ");
  let longWord = 0;
for (let i = 0; i < arr.length; i++) {
  if(arr[i].length > longWord ) {
    longWord = arr[i].length
  }
}
return longWord 
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");