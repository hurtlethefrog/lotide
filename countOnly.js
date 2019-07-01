const counter = function(array, whatToFind) {
  let theCount = 0;
  for( let i = 0; i < array.length; i++) {
    if (array[i] === whatToFind) {
      theCount += 1;
    }
  } return theCount;
}

const countOnly = function(allItems, itemsToCount) {
  let resultObj = {};
  for (const name in itemsToCount) {
    console.log(name);
    if (counter(allItems, name) > 0) {
      resultObj[name] = counter(allItems, name)
      } else {
      resultObj[name] = undefined;
      }
  } return resultObj;
};

module.exports = countOnly;