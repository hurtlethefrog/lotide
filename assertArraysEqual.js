// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length || i < array2.length; ++i) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     } 
//   } return true;
// };

const eqArrays = require('./eqArrays')


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual[0],actual[1]) !== expected) {
        return false;
      } else { return true;
  }
}

// assertArraysEqual([[1,2,3],[1,2,3]], true);


module.exports = assertArraysEqual;
module.exports = eqArrays;
