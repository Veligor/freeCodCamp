//Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  var repeatedString = "";
  while (num > 0) {
    repeatedString += str;
    num--;
  }
  return repeatedString;
}

repeatStringNumTimes("abc", 3);

//  Truncate a String

function truncateString(str, num) {
  let newString = "";
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Finders Keepers

function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
