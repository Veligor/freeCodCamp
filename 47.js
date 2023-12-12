//Use the map Method to Extract Data from an Array

// The global variable

// Only change code below this line

const ratings = watchList.map((object) => ({
  title: object["Title"],
  rating: object["imdbRating"],
}));
// Only change code above this line
console.log(JSON.stringify(ratings));

//Implement map on a Prototype

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line

  // Add your code below this line
  for (let index = 0; index < this.length; index++) {
    newArray.push(callback(this[index], index, this));
  }

  // Add your code above this line
  return newArray;
  // Only change code above this line
};

//Use the filter Method to Extract Data from an Array

// Only change code below this line
let ratingsTwo = watchList.map((object) => ({
  title: object["Title"],
  rating: object["imdbRating"],
}));
//console.log(ratings)
const filteredList = ratings.filter(
  (object) => parseInt(object["rating"]) >= 8,
  0
);

// Only change code above this line

console.log(filteredList);

