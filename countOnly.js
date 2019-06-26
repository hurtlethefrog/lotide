const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯️💯️ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬️🤬️ Assertion failed: ${actual} !== ${expected}`);
  }
};
//a function that will count an array for me
const counter = function(array, whatToFind) {
  let theCount = 0;
  for( let i = 0; i < array.length; i++) {
    if (array[i] === whatToFind) {
      theCount += 1;
    }
  } return theCount;
}

const countOnly = function(allItems, itemsToCount) {
  // define empty object
  let resultObj = {};
  //for in loop using the counter function to get the number of times name appears
  for (const name in itemsToCount) {
    // what do do if name is found
    if (counter(allItems, name) > 0) {
      resultObj[name] = counter(allItems, name)
      } else {
        resultObj[name] = undefined;
      }
  } return resultObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(result1)
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);