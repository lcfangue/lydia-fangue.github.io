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
/*
*/

// 8. null //
/*
*/

// 9. NaN //
/*
*/

// 10. Infinity and -Infinity //
/*
*/

// 11. Simple v. Complex Datatypes //
/*
*/

// 12. By copy v. By reference //
/*
*/