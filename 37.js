//Verify an Object's Constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(3);
myHouse instanceof House;

//Understand Own Properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

//Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
  this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;

