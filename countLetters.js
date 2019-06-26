const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯️💯️ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬️🤬️ Assertion failed: ${actual} !== ${expected}`);
  }
};

const counter = function(array, whatToFind) {
  let theCount = 0;
  for( let i = 0; i < array.length; i++) {
    if (array[i] === whatToFind) {
      theCount += 1;
    }
  } return theCount;
}

const countLetters = function(stringToCount) {
  const totalsObj = {};
  // remove whitespace from input
  let noWhiteSpace = stringToCount.replace(/ /g,'');
  // add keys to object for each unique letter, assign a value of 0
  for (let i = 0; i < noWhiteSpace.length; i++) {
    totalsObj[noWhiteSpace[i]] = 0;
  }
  // loop increasing correct value by 1 each time you encounter a letter
  for (let i = 0; i < noWhiteSpace.length; i++) {
    totalsObj[noWhiteSpace[i]] += 1;
  }

 return totalsObj;
};

console.log(countLetters('lighthouse in the house'));

const countOnly = function(allItems, itemsToCount) {
  let resultObj = {};
  for (const name in itemsToCount) {
    console.log(name);
    if (counter(allItems, name) > 0) {
      resultObj[name] = counter(allItems, name)
      } else {
      resultObj[name] = undefined;
      }
  } return resultObj;
};