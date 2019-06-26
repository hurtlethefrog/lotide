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

const without = function(source, itemsToRemove) {
  let withoutArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutArr.push(source[i]);
    }
  } return withoutArr;
};
console.log(without([1, 2, 3, 'hello'], [1, 'hello'])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]