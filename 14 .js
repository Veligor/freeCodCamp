//Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let resultThree = myRegex.test(myString); // Change this line

//Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let resultt = waldoRegex.test(waldoIsHiding);

//Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let resultTwo = petRegex.test(petString);

//Ignore Case While Matching
let myStringOne = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let resultOne = fccRegex.test(myString);

//Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let resultFour = twinkleStar.match(starRegex); // Change this line

//Match Anything with Wildcard Period


