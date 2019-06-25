const assertArraysEqual = function(array1, array2, expected) {  
  for (let i = 0; i < array1.length || i < array2.length; ++i) {
      if (array1[i] !== array2[i]) {
        return console.log("nope");
      } 
    } return console.log("sure");
  }
assertArraysEqual([1,2,3],[1,2,"3"]);