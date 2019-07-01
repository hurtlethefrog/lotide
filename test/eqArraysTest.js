const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1,2,3]), true);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(eqArrays(['5']), '11'); 
  });
});
