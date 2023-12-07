//Change the Prototype to a New Object
 
function Dog(name) {
   this.name = name;
 }
 
 Dog.prototype = {
   // Only change code below this line
   numLegs: 4,
   eat() {
     console.log("nom nom nom");
   },
   describe() {
     console.log("My name is " + this.name);
   },
 };
 
 // Remember to Set the Constructor Property when Changing the Prototype
 
 function Dog(name) {
   this.name = name;
 }
 
 // Only change code below this line
 Dog.prototype = {
   constructor: Dog,
   numLegs: 4,
   eat: function () {
     console.log("nom nom nom");
   },
   describe: function () {
     console.log("My name is " + this.name);
   },
 };
 
 