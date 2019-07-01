const counter = function(array, whatToFind) {
  let theCount = 0;
  for( let i = 0; i < array.length; i++) {
    if (array[i] === whatToFind) {
      theCount += 1;
    }
  } return theCount;
}

module.exports = counter;