const middle = function(array) {
  let midArr = [];
    if (array.length <= 2) {
      return midArr;
    } else if (array.length % 2 !== 0) {
      midArr.push(array[Math.floor(array.length / 2)]);
      return midArr;
    } midArr.push(array[array.length / 2 - 1], array[array.length / 2])
      return midArr;
}

module.exports = middle;