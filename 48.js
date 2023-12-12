//Implement the filter Method on a Prototype

Array.prototype.myFilter = function (callback) {
   const newArray = [];
   // Only change code below this line
   for (let index = 0; index < this.length; index++) {
     if (callback(this[index], index, this)) {
       newArray.push(this[index]);
     }
   }
   // Only change code above this line
   return newArray;
 };
 
 //Return Part of an Array Using the slice Method
 
 function sliceArray(anim, beginSlice, endSlice) {
   // Only change code below this line
   return anim.slice(beginSlice, endSlice);
 
   // Only change code above this line
 }
 
 const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
 sliceArray(inputAnim, 1, 3);
 
 //Remove Elements from an Array Using slice Instead of splice.
 
 function nonMutatingSplice(cities) {
   return cities.slice(0, 3);
 }
 
 //Combine Two Arrays Using the concat Method
 
 function nonMutatingConcat(original, attach) {
   // Only change code below this line
   return original.concat(attach);
 }
 
 //Add Elements to the End of an Array Using concat Instead of push
 
 function nonMutatingPush(original, newItem) {
   // Only change code below this line
   return original.concat(newItem);
 }
 
 