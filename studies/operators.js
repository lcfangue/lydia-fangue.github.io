/**
 * OPERATORS:
 * 
 * 0. An operator is a symbol used to alter or modify operands (values).
 * 
 * 1. There are multiple different types of operators, used to perform different
 * tasks on these operands.
 */

// 1. Assignment Operators //
/* Assignment operators are used to assign value to a variable. The six assignment
operators are demonstrated below.
*/

var equalOperator = 'value';
console.log(equalOperator); // prints => value

var plusEqual = 0;
plusEqual += 8;
console.log(plusEqual); // prints => 8

var minusEqual = 10;
minusEqual -= 6;
console.log(minusEqual); // prints => 4

var multiplyEqual = 7;
multiplyEqual *= 3;
console.log(multiplyEqual); // prints => 21

var dividedbyEqual = 20;
dividedbyEqual /= 4;
console.log(dividedByEqual); // prints => 5

var remainderOperator = 32;
remainderOperator %= 3; // 32/3=10 has a remainder of 2, so it prints => 2
console.log(remainderOperator);

// 2. Arithmetic Operators //
/* Arithmetic operators are used to perform mathematical operations on operands. The
seven arithmetic operators are demonstrated below.
*/

var plus = 4 + 3;
console.log(plus); // prints => 7

var minus = 10 - 3;
console.log(minus); // prints => 7

var multiply = 4 * 3;
console.log(mulitply); // prints => 12

var divide = 55 / 5;
console.log(divide); // prints => 11

var modulus = 19 % 2;
console.log(modulus); // 19/2=9 has a remainder of 1, so it prints => 1

var increment = 6;
increment++;
console.log(increment); // ++ counts up by 1, so it prints => 7

var decrement = 14;
decrement--;
console.log(decrement); // -- counts down by 1, so it prints => 13

// 3. Comparison Operators //
/* Comparison operators are used to compare two operands, and return a boolean
value of true or false. The seven comparison operators are demonstrated below.
*/

var equalTo = 8;
var eight = '8';
console.log(equalTo == eight); // == doesn't consider datatype, so it prints => true

console.log(equalTo === eight); // === considers datatype, so it prints => false

var x = 4;
var y = 7;
console.log(x != y); // != can be read as "does not equal", so it prints => true

console.log(x < y); // prints => true

console.log(x > y); // prints => false

console.log(x <= y); // prints => true

console.log(x >= y); // prints => false



// 4. Logical Operators //
/* Logical operators are used to chain different conditions together. The three
logical operators, && (and), || (or), and ! (not) are demonstrated below. 
*/

var a = 6;
var b = 2;

console.log((a > b) && (a != b)); // a is greater than b, and a is not equal to b, so it prints => true
console.log((a < b) || (a === b)); // a is not less than b, nor is it equal to b, so it prints => false
console.log(!(a === b)); // a is not equal to b, so it prints => false


// 5. Unary Operators //
/*
*/

// 6. Ternary Operator //
/*
*/