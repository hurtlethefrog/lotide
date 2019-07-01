# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* counter(arr, val) = counts all instances of a value found in an array
* getAllIndexesOf(arr,val) = returns a new array with the indexes of of theval found in the array
* head(arr) = returns the first element in an array
* tail(arr) = returns a new array without the first element
* middle(arr) = returns the centre of an array, either one or two elements
* assertArraysEqual(arr, arr) = returns true if two input arrays are equal
* assertEqual(val, val) = returns true if two primitive values are input
* countLetters(obj) = returns an object with key being the element being counted and the value as the number of times it appears
* countOnly(arr, arr) = counts all instances of array values appearing
* eqArrays(arr, arr) = evaluates whether two arrays are equal 
* eqObjects(obj, obj) = evaluates whether two objects are equal
* findKey = EMPTY STRETCH ACTIVITY
* findKeyByValue(obj, val) = finds the index of of a value within an array
* flatten(arr) = flattens an array within an array to one depth
* letterPositions(str) = returns an object with all the letters found within the string and their indexes 
* map(arr, func) = preforms a function on each element of an array
* takeUntil(arr, func) = returns the first element of an array for which the function returns false
* without(arr, val) = returns a new arr with all instances of val removed