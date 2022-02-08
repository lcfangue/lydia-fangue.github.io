// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //

  //execute a for loop that iterates forwards through each item in an array
  for (var i = 0; i < 11; i++) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //

  //create a loop that starts at the end of the array, and iterates backwards through the array
  for (var i = array.length - 1; i >= 0; i--) {
  //log the array using var i
    console.log(array[i]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

  //create empty array to store keys
  var array = [];
  //use for var key loop to access keys
  for (var key in object) {
  //push keys to empty array
    array.push(key);
  //return array
} return array;
 
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //


//create a loop that iterates through the object's keys

for (var key in object) {
//use a console.log statement to print the object's keys

  console.log(key, object[key]);
}
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //declare empty array to store objects
  var array = [];
  
  for (var key in object) {
    array.push(object[key]);
  }
  return array;
    
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //create a for in loop that will loop through the objects values
  for (var key in object) {
  //console log the values via object
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //declare an empty array
  var array = [];
  //create a for in loop to iterate through the object
  for (var key in object) {
  //push the object keys to the array
    array.push(object[key]);
  }
  //return the length of the array
  return array.length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //


  //create empty array to store object values
  var array = [];

  //create for in loop
  for (var key in object) {
  //push keys to array
    array.push(object[key]);
  }
  //make a loop to iterate backwards through the array
  for (var i = array.length - 1; i >= 0; i--) {
  //console.log the results?
      console.log(array[i]);
  }
 
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
