const flatten = function(array) {
let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattened.push(array[i]);
    } else if(Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattened.push(array[i][j]);
      }
    }
  } return flattened;
}

module.exports = flatten;
