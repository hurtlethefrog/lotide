const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true for 'hello' and 'hello'", () => {
    assert.strictEqual(assertEqual('hello', 'hello'));
  });

  it("returns false for 5 and '5'", () => {
    assert.strictEqual(assertEqual('5', 5)); 
  });
});
