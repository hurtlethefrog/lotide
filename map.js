const map = function(array, cb) {
  let results = [];
  for (let element of array) {
    results.push(cb(element));
  }
  return results;
}

modules.export = map;