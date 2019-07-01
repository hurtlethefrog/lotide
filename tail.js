const assertEqual = require('./assertEqual')
const assertArraysEqual = require('./assertArraysEqual')
const equalArrays = require('./eqArrays')

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`💯️💯️ Assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🤬️🤬️🤬️ Assertion failed: ${actual} !== ${expected}`);
//   }
// };

const tail = function(array) {
  let result = array.slice(1);
  return result;
};

// console.log(tail([1,2,3,4]))

console.log(assertArraysEqual(tail([1,2,3,4]), [2,3,4]));
