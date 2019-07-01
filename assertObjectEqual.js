
const eqArrays = require('./index').eqArrays;

const eqObjects = require('./index').eqObjects;

const assertObjectsEqual = function(actual, expected) {
  console.log(actual)
  let assert = false;
    if (eqObjects(actual[0], actual[1]) !== false) {
      return console.log (`💯️💯️ Assertion passed: ${actual} === ${expected}`)
    } else { console.log(`🤬️🤬️ Assertion failed: ${actual} !== ${expected}`)}
};

module.exports = assertObjectsEqual;