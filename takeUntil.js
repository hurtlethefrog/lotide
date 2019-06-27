const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length || i < array2.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  } return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual[0],actual[1]) !== expected) {
        return console.log("nope");
      } else { return console.log("sure");
  }
}

const takeUntil = function(array, cb) {
  // empty array to push to
  result = [];
  //loop through elements
  for (let element of array) {
    // compare each to the callback statement
    if (cb(element) === false) {
      // push if it evaluates to true
      result.push(element);
      // return when if evals to false
    } else {
      return result;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');


assertArraysEqual([data1, results1], false)
assertArraysEqual([data2, results2], false)