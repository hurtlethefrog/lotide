const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length || i < array2.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  } return true;
};

const assertArraysEqual = function(actual, expected,) {  
  for (let i = 0; i < actual.length || i < expected.length; ++i) {
      if (actual[i] !== expected[i]) {
        return console.log("nope");
      } 
    } return console.log("sure");
  }

const middle = function(array) {
  // take an array and return the 'middle' one or two elements
  let midArr = [];
    if (array.length <= 2) {
      return midArr;
    } else if (array.length % 2 !== 0) {
      midArr.push(array[Math.floor(array.length / 2)]);
      return midArr;
    } midArr.push(array[array.length / 2 - 1], array[array.length / 2])
      return midArr;
}

console.log(middle([1,2,3,4,5,6,6,7,9]));

assertArraysEqual(middle([1,2,3,4,5,6]), [3,4])