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

myLunch = 'Roast beef sandwich';
console.log(myLunch); // prints => Roast beef sandwich

// 3. reassignment //
/* Hate roast beef? We can change that. But seriously, we can reassign a variable
(as long as we are using the var or let keyword) to a different piece of data.
*/

myLunch = 'One boiled egg and a glass of hot Chardonnay';
console.log(myLunch); // prints => One boiled egg and a glass of hot Chardonnay

// 4. var, let, and const //
/* There are three different keywords with which to declare variables: var, let,
and const. Const cannot be reassigned like var or let. Let can be reassigned, but 
it cannot be redeclared like var. Var can exist in the global scope of your program 
(or function scope, if it is declared in a function), while let and const are 
function-scoped or block-scoped only.
*/

let myGame = 'Horizon Zero Dawn';
let myGame = 'Stardew Valley';
console.log(myGame); // prints => SyntaxError: Identifier 'myGame' has already been declared

let someBro = 'Chet Hanks';
someBro = 'Justin Beaver';
console.log(someBro); // prints => Justin Beaver

const cheeseEater = 'me';
cheeseEater = 'someone else';
console.log(cheeseEater); // prints => TypeError: Assignment to constant variable.

// 5. hoisting //
/* Hoisting is what allows you to declare a function at the end of your code,
and still be able to use it at any point before that. While compiling your code, the browser
stores the memory of your function, making it accessible at any point in your program. Not
everything is hoisted, though. Arrow functions and function expressions are not hoisted.
Variables created with the var keyword are hoisted, but their values are not. While variables 
created with let or const are technically hoisted to the top, the automatic assignment of
"undefined" after declaration is NOT hoisted.
*/

console.log(bestCaptain); // prints => undefined
var bestCaptain = 'Janeway';
console.log(bestCaptain); // prints => Janeway

console.log(bestCaptain); // prints => ReferenceError: Cannot access 'bestCaptain' before initialization
let bestCaptain = 'Sisko';

console.log(myBeverage('lukewarm sink water')); // prints => I drink lukewarm sink water
function myBeverage(drink) {
    return 'I drink ' + drink; 
}

console.log(snackReaction('pretzels', 'thirsty')); // prints => TypeError: snackReaction is not a function
var snackReaction = function(food, feeling) {
    return 'These ' + food + ' are making me ' + feeling + '!';
}

var snackReaction = function(food, feeling) {
    return 'These ' + food + ' are making me ' + feeling + '!';
}
console.log(snackReaction('pretzels', 'thirsty')); // prints => These pretzels are making me thirsty!
