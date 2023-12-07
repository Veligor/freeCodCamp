//Inherit Behaviors from a Supertype
 
function Animal() {}
 
Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagleFour = Object.create(Animal.prototype); // Change this line

//Set the Child's Prototype to an Instance of the Parent

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
let beagleFive = new Dog();

//Reset an Inherited Constructor Property

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

let duckOne = new Bird();
Bird.prototype.constructor = Bird;
let beagleSix = new Dog();
Dog.prototype.constructor = Dog;

