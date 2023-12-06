//Create a Basic JavaScript Object

let dogFavorit = {
   eye: 2,
   breed: "rotvailer",
   height: 65, 
   name: "lucky"
   };

   //Use Dot Notation to Access the Properties of an Object

   let dog = {
      name: "Spot",
      numLegs: 4
    };
    // Only change code below this line
    console.log(dog.name);
    console.log(dog.numLegs);

    //Create a Method on an Object

    let dogs = {
      name: "Spot",
      numLegs: 4,
      sayLegs() {
        return "This dog has 4 legs."
      }
    };
    
    dog.sayLegs();