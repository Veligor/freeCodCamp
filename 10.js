// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
   yesterday: 75,
   today: 77,
   tomorrow: 80
 };
 
 // Only change code below this line
   
 const {today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES
 // Only change code above this line


//  Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
 const LOCAL_FORECAST = {
   yesterday: { low: 61, high: 75 },
   today: { low: 64, high: 77 },
   tomorrow: { low: 68, high: 80 }
 };
 
 // Only change code below this line
   
 const {today: {low: lowToday, high: highToday2} } = LOCAL_FORECAST;

// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
[a,b] = [b,a];
console.log(a); // should be 6
console.log(b); // should be 8

// Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.
function removeFirstTwo(list) {
   const [,, ...arr] = list;
   return arr;
 }
 
 const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const sourceWithoutFirstTwo = removeFirstTwo(source);

//  Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
   max: 56.78,
   standard_deviation: 4.34,
   median: 34.54,
   mode: 23.87,
   min: -0.75,
   average: 35.85
 };
 
 // Only change code below this line
 const half = ({max,min}) => (max + min) / 2.0; 

//  Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.
 const result = {
   success: ["max-length", "no-amd", "prefer-arrow-functions"],
   failure: ["no-var", "var-on-top", "linebreak"],
   skipped: ["no-extra-semi", "no-dup-keys"]
 };
 function makeList(arr) {
   // Only change code below this line
   const failureItems = [];
   for(let i = 0; i < arr.length; i++) {
     failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
   }
   // Only change code above this line
 
   return failureItems;
 }
 
 const failuresList = makeList(result.failure);

 //Use object property shorthand with object literals to create and return an object with name, age and gender properties.

 const createPerson = (name, age, gender) => {
   // Only change code below this line
   return ({
     name,
     age,
     gender  });
   // Only change code above this line
 };




