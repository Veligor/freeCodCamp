//Apply Functional Programming to Convert Strings to URL Slugs.

// Only change code below this line
function urlSlug(title) {
   let lowerCaseTitle = title.toLowerCase();
   let splitTitle = lowerCaseTitle.split(" ");
   let filterTitle = splitTitle.filter((element) => element !== "");
   let hyphenTitle = filterTitle.join("-");
   return hyphenTitle;
 }
 // Only change code above this line
 console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
 
 //Use the every Method to Check that Every Element in an Array Meets a Criteria-Functional Programming.
 
 function checkPositive(arr) {
   // Only change code below this line
 
   let result = arr.every((arr) => arr > 0);
   return result;
   // Only change code above this line
 }
 
 checkPositive([1, 2, 3, -4, 5]);
 
 
 //Use the some Method to Check that Any Elements in an Array Meet a Criteria | Functional Programming
 
 function checkPositive(arr) {
   // Only change code below this line
 
 let someArr = arr.some(arr => arr > 0)
 return someArr;
   // Only change code above this line
 }
 
 checkPositive([1, 2, 3, -4, 5]);
 
 
 //Introduction to Currying and Partial Application
 
 function add(x) {
   // Only change code below this line
 return function (y){
   return function (z) {
     return x + y + z
   }
 }
 
   // Only change code above this line
 }
 
 console.log(add(10)(20)(30));