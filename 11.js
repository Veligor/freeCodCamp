//  Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//Use class Syntax to Define a Constructor Function

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line
const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'

//Use getters and setters to Control Access to an Object

class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius