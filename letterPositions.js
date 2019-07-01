const getAllIndexesOf = require('./index').getAllIndexesOf;

const letterPositions = function(stringToCount) {
  const totalsObj = {};
  for (let i = 0; i < stringToCount.length; i++) {
    if (stringToCount[i] !== ' ') {
      totalsObj[stringToCount[i]] = getAllIndexesOf(stringToCount, stringToCount[i]);
    }
  }
  return totalsObj;
};

module.exports = letterPositions;