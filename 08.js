const myArray = [];

// Only change code below this line
for(let i = 1; i < 11; i += 2) {
  myArray.push(i);
}

const myArrayTwo = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i)
}

const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for (let i = 0; i < myArr.length; i++ ) {
  total += myArr[i]
}

function multiplyAll(arr) {
   let product = 1;
   // Only change code below this line
   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr[i].length; j++) {
         product *= arr[i][j]
     }
   }
   // Only change code above this line
   return product;
 }
 
 multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

 const myArrayTWo= [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++
}
while (i < 10) 


function findFactorial(num) {
   if (num === 0) return 1
   let factorial = num * findFactorial(num - 1)
   return factorial;
 }
 
 findFactorial(5) // 120

 // Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for (let i = 0; i < contacts.length; i++){
 if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
  return contacts[i][prop];
 } else {
   "No such contact"
 }
}
return "No such property"
  // Only change code above this line
}

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");