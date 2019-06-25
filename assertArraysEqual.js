const assertArraysEqual = function(actual, expected,) {  
  for (let i = 0; i < actual.length || i < expected.length; ++i) {
      if (actual[i] !== expected[i]) {
        return console.log("nope");
      } 
    } return console.log("sure");
  }
assertArraysEqual([1,2,3],[1,2,"3"]);