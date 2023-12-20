//Wherefore art thou

function whatIsInAName(collection, source) {
   let sourceKeys = Object.keys(source);
   let newArr = collection.filter(el => sourceKeys.every(key => el[key] == source[key]))
   return newArr
 }

 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//Store Multiple Values in one Variable using JavaScript Arrays

const myArray = ["", 2];

//Nest one Array within Another Array

const myArra = [[],[]];

//Access Array Data with Indexes

const myArry = [50, 60, 70];

let myDate = myArray[0]

//Modify Array Data With Indexes

// Setup
const myAray = [18, 64, 99];
// Only change code below this line
myArray[0] = 45

//Access Multi-Dimensional Arrays With Indexes

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
