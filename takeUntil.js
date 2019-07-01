const takeUntil = function(array, cb) {
  result = [];
  for (let element of array) {
    if (cb(element) === false) {
      result.push(element);
    } else {
      return result;
    }
  }
};

modules.export = takeUntil;