const findKeyByValue = function(obj, val) {
  for (let genre in obj) {
    if (val === obj[genre]) {
      return genre;
    }
  }
};
module.exports = findKeyByValue;