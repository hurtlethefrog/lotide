const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯️💯️ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬️🤬️🤬️ Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  for (let genre in obj) {
    if (val === obj[genre]) {
      return genre;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  betterThanThatTrash: "Anythign Else"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");