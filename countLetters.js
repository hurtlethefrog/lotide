const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯️💯️ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬️🤬️ Assertion failed: ${actual} !== ${expected}`);
  }
};
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
