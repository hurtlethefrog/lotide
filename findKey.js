
const findKey = function(obj, cb) {
  for (let ele in obj) {
    if (cb(obj[ele]) === true) {
      return ele;
    }
  }
};

module.exports = findKey;