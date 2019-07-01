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