const getAllIndexesOf = function(arr, val) {
  let indexes = [], i;
  for (i = 0; i < arr.length; i++)
    if (arr[i] === val)
      indexes.push(i);
  return indexes;
};

modules.export = getAllIndexesOf;