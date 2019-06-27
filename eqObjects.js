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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true)

const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, cd2), false); // => false