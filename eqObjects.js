const eqArrays = require('./index').eqArrays

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

module.exports = eqObjects;