//Copy Array Items Using slice()

function forecast(arr) {
   // Only change code below this line
   let newArr = arr.slice(2, 4)
   return newArr;
 }
 
 // Only change code above this line
 console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

 //Copy an Array with the Spread Operator

 function copyMachine(arr, num) {
   let newArr = [];
   while (num >= 1) {
     // Only change code below this line
        let newAr = [arr];
         newArr.push(newAr)
     // Only change code above this line
     num--;
   }
   return newArr;
 }
 
 console.log(copyMachine([true, false, true], 2));