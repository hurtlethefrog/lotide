const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯️💯️ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬️🤬️🤬️ Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length || i < array2.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  } return true;
};

const eqObjects = function(obj1, obj2) {
  let equals = false;
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2); 
  
  if(keys1.length !== keys2.length) {
    return false;
  } 
  for (let o of keys1) {
    if (Array.isArray(obj1[o]) && Array.isArray(obj2[o])) {
      equals = eqArrays(obj1[o], obj2[o]);
    } else {
      equals = obj1[o] === obj2[o]
    }
  }
  return equals;
};

const assertObjectsEqual = function(actual, expected) {
  console.log(actual)
  let assert = false;
    if (eqObjects(actual[0], actual[1]) !== false) {
      return console.log (`💯️💯️ Assertion passed: ${actual} === ${expected}`)
    } else { console.log(`🤬️🤬️ Assertion failed: ${actual} !== ${expected}`)}
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

// assertEqual(eqObjects(cd, dc), true); // => true


assertObjectsEqual(([cd, dc]), true);