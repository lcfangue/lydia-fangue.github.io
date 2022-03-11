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

// 1. Number //
/* A number is a simple data type, represented by a whole number or a number with
a decimal.
*/

var plantsIKilledThisWeek = 3;
console.log(plantsIKilledThisWeek); // prints => 3

var pizzaConsumed = .5;
console.log(pizzaConsumed); // prints => 0.5

// 2. String //
/* A string is a simple data type, represented by letters wrapped in quotations, 
usually a word or a combination of words. 
*/

var superiorOutfit = "Shania Twain's leopard digs";
console.log(superiorOutfit); // prints => Shania Twain's leopard digs

// 3. Boolean //
/* A boolean can only have a value of either true or false. You can think of it like
an "on/off" switch. Boolean values are the bases for all comparison and conditional 
statements.
*/

var amAnxious = true;
console.log(amAnxious); // prints => true

var canSeeTheEnd = false;
console.log(canSeeTheEnd); // prints => false

// 4. Array //
/* Arrays are not simple data types, but are actually a type of object. They allow you to 
store an alterable collection of data under a single variable name. An array's elements can
be accessed and altered with a wide variety of array methods.
*/

var mySalad = ['chicken', 'parmesan', 'lemon', 'cashews', 'spinach'];
console.log(mySalad); // prints => ['chicken', 'parmesan', 'lemon', 'cashews', 'spinach']

// 5. Object //
/* Objects are complex data types. They can store multiple properties called key-value pairs.
Keys are usually strings, and can be set to equal the value of a string, a number, an object 
or an array, and more. An object is useful when you need to store multiple properties in the same
data container. You can access or alter the properties of an object using various methods.
 */

var myHouse = {
    color: 'blue',
    size: 'small',
    shape: 'rectangle',
    sides: 4,
    neighborhood: 'Hollygrove'
};
console.log(myHouse); // prints => {
/**                                 color: 'blue',
                                    size: 'small',
                                    shape: 'rectangle',
                                    sides: 4,
                                    neighborhood: 'Hollygrove'
                                    }
*/

// 6. Function //
/* Functions are code blocks that are designed to complete specific tasks. Functions are defined
by giving them names (usually related to the task that they are performing), parameters (placeholders
for the arguments that will be passed through), and, inside curly brackets, the code that is going 
to be executed. The code will cease to perform when it hits what is called  a return statement 
(contained within the curly brackets, after the code that is to be performed.) Writing a function
declaration does not automatically execute said function, however. The function needs to be called 
in order for the code to be executed.
*/

function add(x, y) {
    return x + y;
};
console.log(add(4, 7)); // prints => 11

// 7. undefined //
/* Undefined is classified as a simple datatype, as well as a 'falsy' value. A variable that has 
not been assigned a value will be undefined. A variable that has not been declared at all will 
also have a value of undefined. A function will log as undefined if it is not given a value to return. 
*/

var help;
console.log(help); // prints => undefined

console.log(please); // prints => undefined

// 8. null //
/* Null is also a simple datatype that has a 'falsy' value. It is mostly used when a variable is 
intentionally not given a value, but could be assigned a value later on. If a function returns
null, it means that the expected object output could not be created.
*/

var okaySure = null;
console.log(okaySure); // prints => null

// 9. NaN //
/* NaN stands for Not a Number. It is essentially a number type, that is not a legal number. NaN
can be thrown to the console for a few different reasons, like if you try to perform math (other than +)
on a string.
*/

var garlic = "clove" / 2;
console.log(garlic); // prints => NaN

// 10. Infinity and -Infinity //
/* Infinity and -Infinity are numeric values representing infinity and negative infinity, respectively.
They are global properties. The value of Infinity is greater than any number, and the value of 
-Infinity is less than any number.
*/

console.log(Infinity + 1); // prints => Infinity
console.log(-Infinity * 3); // prints => -Infinity
console.log(-Infinity * -1); // prints => Infinity

// 11. Simple v. Complex Datatypes //
/* Simple datatypes represent a singular piece of data, like an integer (number) or a string of 
words (string). Complex datatypes store multiple pieces of data, like an object, an array, or a 
function. Complex datatypes are comprised of multiple simple datatypes, and sometimes even 
other complex datatypes.
*/

var string = "A string is a simple datatype";
console.log(string); // prints => "A string is a simple datatype"

var soIsNumber = 8;
console.log(soIsNumber); // prints => 8

var soIsBoolean = true;
console.log(soIsBoolean); // prints => true

var object = {
    string: "Objects store multiple types of data",
    number: 8,
    boolean: true,
    array: ['including', 'other', 'complex', 'types']
  };
  console.log(object); // prints => {
/*                                  string: 'Objects store multiple types of data',
                                    number: 8,
                                    boolean: true,
                                    array: [ 'including', 'other', 'complex', 'types' ]
                                    }
*/

// 12. Copy by value v. Copy by reference //
/* When copying by value, the original data you are copying is not modified. When copying
by reference, the original data is modified. When you copy by value, a copy of the variable
is given, whereas when copying by reference, the actual variable is given. Additionally, 
objects and arrays are copied by reference upon assignment, whereas primitive datatypes are 
copied by value upon assignment.
*/



