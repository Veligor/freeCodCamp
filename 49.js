//Use the reduce Method to Analyze Data.

function getRating(watchList) {
  // Only change code below this line
  let nolanFilter = watchList.filter(
    (object) => object["Director"] == "Christopher Nolan"
  );
  let ratingNolan = nolanFilter.map((movie) => + movie["imdbRating"]);
  let sumRatings = ratingNolan.reduce((sum, rating) => sum + rating);
  let averageRating = sumRatings / nolanFilter.length;

  // Only change code above this line
  return averageRating;
}

//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem.

const squareList = (arr) => {
  // Only change code below this line
  let wholeNumber = arr.filter((number) => number >= 0 && number % 1 == 0);
  //let earn = wholeNumber.map(number => number ** 2)
  let earn = wholeNumber.map((number) => number * number);
  return earn;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//Sort an Array Alphabetically using the sort Method.

function alphabeticalOrder(arr) {
  // Only change code below this line
  let sort = arr.sort((a, b) => (a == b ? 0 : a > b ? 1 : -1));
  return sort;
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

