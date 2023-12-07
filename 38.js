//Iterate Over All Properties

function Dog(name) {
   this.name = name;
 }
 
 Dog.prototype.numLegs = 4;
 
 let beagleOne = new Dog("Snoopy");
 
 let ownPropsOne = [];
 let prototypeProps = [];
 
 // Only change code below this line
 
 for (let props in beagle) {
   if (beagle.hasOwnProperty(props)) {
     ownProps.push(props);
   } else {
     prototypeProps.push(props);
   }
 }
 
 //Understand the Constructor Property
 
 function Dog(name) {
   this.name = name;
 }
 
 // Only change code below this line
 function joinDogFraternity(candidate) {
   if (candidate.constructor === Dog) {
     return true;
   } else {
     return false;
   }
 }
 
 