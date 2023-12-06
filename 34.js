// Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let copyArr = arr2.slice();
  copyArr.splice(n, 0, ...arr1);
  return copyArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Falsy Bouncer

function bouncer(arr) {
  let trueArr = arr.filter(Boolean);
  return trueArr;
}

bouncer([7, "ate", "", false, 9]);

//Chunky Monkey

function chunkArrayInGroups(arr, size) {
  var results = [];
  while (arr.length) {
    results.push(arr.splice(0, size));
  }
  return results;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
