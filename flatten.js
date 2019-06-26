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
};  

const flatten = function(array) {
let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattened.push(array[i]);
    } else if(Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattened.push(array[i][j]);
      }
    }
  } return flattened;
}

 console.log(flatten([1, 2, [3, 4], 5, [6]]))
