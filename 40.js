//Understand Where an Object’s Prototype Comes From
 
function Dog(name) {
   this.name = name;
 }
 
 let beagleTwo = new Dog("Snoopy");
 
 // Only change code below this line
 Dog.prototype.isPrototypeOf(beagle);
 
 //Understand the Prototype Chain
 
 function Dog(name) {
   this.name = name;
 }
 
 let beagleThree = new Dog("Snoopy");
 
 Dog.prototype.isPrototypeOf(beagle); // yields true
 
 // Fix the code below so that it evaluates to true
 Object.prototype.isPrototypeOf(Dog.prototype);
 
 //Use Inheritance So You Don't Repeat Yourself
 
 function Cat(name) {
   this.name = name;
 }
 
 Cat.prototype = {
   constructor: Cat,
 };
 
 function Bear(name) {
   this.name = name;
 }
 
 Bear.prototype = {
   constructor: Bear,
 };
 
 function Animal() {}
 
 Animal.prototype = {
   constructor: Animal,
   eat: function () {
     console.log("nom nom nom");
   },
 };
 
 