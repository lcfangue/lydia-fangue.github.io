/**
 * STRING MANIPULATION:
 * 
 * 0. Strings (text wrapped in quotes) can be modified by using various mechanisms
 * that were specifically created for this task.
 * 
 * 1. String manipulation can be done using operators, or string methods.
 */

// 1. Using Operators //
/* The concatenation operator is represented by a plus sign (+). It can be used to
join different strings together. Strings join themselves exactly as written, so an empty
string representing a space may need to be used to make the string read sensically.
*/

var food = 'garlic';
var otherFood = 'roti';
console.log(food + otherFood); // prints => garlicroti

var someMoreFood = "peaches" + " and " + "onions";
console.log(someMoreFood); // prints => peaches and onions

// 2. Using String Methods //
/* There are many different kinds of string methods that can help us break down
and manipulate strings.
*/

var bookshelf = 'green';
console.log(bookshelf.length); // .length determines the number of characters, so it prints => 5

var 