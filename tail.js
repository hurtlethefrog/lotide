const assertEqual = require('./assertEqual')
const assertArraysEqual = require('./assertArraysEqual')
const equalArrays = require('./eqArrays')

const tail = function(array) {
  let result = array.slice(1);
  return result;
};

