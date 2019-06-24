const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯️💯️ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬️🤬️🤬️ Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function(array) {
  let item1 = array[0];
  return item1;
};

assertEqual(head([5]), 5);
assertEqual(head([]), "Hello");