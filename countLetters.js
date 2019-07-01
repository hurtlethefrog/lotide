const countLetters = function(stringToCount) {
  const totalsObj = {};
  let noWhiteSpace = stringToCount.replace(/ /g,'');
  for (let i = 0; i < noWhiteSpace.length; i++) {
    totalsObj[noWhiteSpace[i]] = 0;
  }
  for (let i = 0; i < noWhiteSpace.length; i++) {
    totalsObj[noWhiteSpace[i]] += 1;
  }
  return totalsObj;
};

module.exports = countLetters;