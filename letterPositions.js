const getAllIndexes = function(arr, val) {
  let indexes = [], i;
  for (i = 0; i < arr.length; i++)
    if (arr[i] === val)
      indexes.push(i);
  return indexes;
};

const letterPositions = function(stringToCount) {
  const totalsObj = {};
  for (let i = 0; i < stringToCount.length; i++) {
    if (stringToCount[i] !== ' ') {
      totalsObj[stringToCount[i]] = getAllIndexes(stringToCount, stringToCount[i]);
    }
  }
  return totalsObj;
};

console.log(letterPositions('lighthouse in the house'));