/**
 * DATA TYPES:
 * 
 * 0. We previously learned that a variable can store data, but in Javascript,
 * the data itself can take many forms. There are many different data types,
 * both simple (primitive) and complex. In order to manipulate the data in
 * our program, it is important to know the type of data, so that we can utilize
 * the appropriate methods.
 * 
 * 1. Some of the Javascript data types include (but are not limted to): string, 
 * number, boolean, null, undefined, NaN, object, array, or function.
 * 
 * 2. You can use the typeof operator on a piece of data to determine the value's
 * data type.
 */

// 1. number //
/* A number is a simple data type, represented by a whole number or a number with
a decimal.
*/

var plantsIKilledThisWeek = 3;
console.log(plantsIKilledThisWeek); // prints => 3

var pizzaConsumed = .5;
console.log(pizzaConsumed); // prints => 0.5

// 2. string //
/* A string is a simple data type, represented by letters wrapped in quotations, 
usually a word or a combination of words. 
*/

var superiorOutfit = "Shania Twain's leopard digs";
console.log(superiorOutfit); // prints => Shania Twain's leopard digs

// 3. boolean //
/* A boolean can only have a value of either true or false. You can think of it like
an "on/off" switch. Boolean values are the bases for all comparison and conditional 
statements.
*/

var amAnxious = true;
console.log(amAnxious); // prints => true

var canSeeTheEnd = false;
console.log(canSeeTheEnd); // prints => false

// 4. array //
/* Arrays are not simple data types, but are actually a type of object. They allow you to 
store an alterable collection of data under a single variable name.
*/