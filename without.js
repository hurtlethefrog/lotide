const without = function(source, itemsToRemove) {
  let withoutArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutArr.push(source[i]);
    }
  } return withoutArr;
};

module.exports = without;