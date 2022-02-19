/**
 * VARIABLES:
 * 
 * 0. In Javascript, a variable is used as a place to store data. We can
 * access or manipulate this data as needed in our program. There are multiple
 * types of data that can be stored in a variable, including numbers, strings,
 * booleans, objects, arrays, and more.
 * 
 * 1. The first step in creating a variable is declaration. This is done by
 * using the var, const, or let keyword to identify the word that follows as
 * a variable.
 * 
 * 2. The second step in creating a variable is initialization. This is 
 * accomplished by assigning the variable to the piece of data that you 
 * wish to store.
 */

// 1. delcaration //
/* Declaration merely announces the variable's presence in your code. It does
not necessarily mean the variable has any data stored in it yet. If you were 
to log it to the console, it would return undefined, as it has not yet been
defined.
*/

var myLunch;

console.log(myLunch); // prints => undefined

// 2. initialization //
/* Initialization is the process where we store data inside of the variable
we've declared. This data can be accessed later on in our code as needed.
*/

myLunch = "Roast beef sandwich";

console.log(myLunch); // prints => Roast beef sandwich

// 3. reassignment //
/* Hate roast beef? We can change that. But seriously, we can reassign a variable
(as long as we are using the var keyword) to a different piece of data.
*/

myLunch = "One boiled egg and a glass of hot Chardonnay";

console.log(myLunch); // prints => One boiled egg and a glass of hot Chardonnay

// 4. var, let, and const //
/* 
*/