

function merge(arr1, arr2) {
  var returnArr = [];

  var i1 = 0;
  var i2 = 0;

  while (i1 < arr1.length || i2 < arr2.length) {
    if (i1 === arr1.length) {
      returnArr.push(arr2[i2]);
      i2++;
    } else if (i2 === arr2.length) {
      returnArr.push(arr1[i1]);
      i1++;
    } else if (arr1[i1] < arr2[i2]) {
      returnArr.push(arr1[i1]);
      i1++;
    } else {
      returnArr.push(arr2[i2]);
      i2++;
    }
  }

  return returnArr;
}

console.log(merge([2,4,6], [3,5,7,8,9,10]));


