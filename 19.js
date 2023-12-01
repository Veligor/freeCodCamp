//Catch Off By One Errors When Using Indexing

function countToFive() {
   let firstFive = "12345";
   let len = firstFive.length;
   // Only change code below this line
   for (let i = 0; i < len; i++) {
   // Only change code above this line
     console.log(firstFive[i]);
   }
 }
 
 countToFive();

 //Use Caution When Reinitializing Variables Inside a Loop

 function zeroArray(m, n) {
   // Creates a 2-D array with m rows and n columns of zeroes
   let newArray = [];
   let row = [];
   for (let i = 0; i < m; i++) {
     // Adds the m-th row into newArray
   row = []
     for (let j = 0; j < n; j++) {
       // Pushes n zeroes into the current row to create the columns
       row.push(0);
     }
     // Pushes the current row, which now has n zeroes in it, to the array
     newArray.push(row);
   }
   return newArray;
 }
 
 let matrix = zeroArray(3, 2);
 console.log(matrix);
 