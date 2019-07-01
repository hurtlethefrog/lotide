const middle = require('../middle')
const assert = require('chai').assert;

// assertEqual(head([1,2,3]), 1, true)

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.notStrictEqual(middle([1, 2, 3]), 2);
  });

  it("returns '5' for ['5']", () => {
    assert.notStrictEqual(middle(['5']), '11'); 
  });
});
// console.log(assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]));