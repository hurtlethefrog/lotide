const map = function(array, cb) {
  let results = [];
  for (let element of array) {
    results.push(cb(element));
  }
  return results;
}

module.exports = map;