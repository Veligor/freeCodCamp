//Sum All Numbers in a Range

function sumAll(arr) {
  let minimumNumber = Math.min(arr[0], arr[1]);
  let maximumNumber = Math.max(arr[0], arr[1]);
  var result = 0;
  for (let i = minimumNumber; i <= maximumNumber; i++) {
    result += i;
  }
  return result;
}
sumAll([1, 4]);

//Diff Two Arrays

function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//Seek and Destroy

function destroyer(arr, ...args) {
  let newArr = arr.filter(el => !args.includes(el))

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);