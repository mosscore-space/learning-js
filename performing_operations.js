// Assignment Operators_____

// the assignment is a fundamental operation that assighns value to variable, conts, array elements etc..
// this operation is performed using = symbol

let a; // Declare a variable `a`
const b = 26; // Define a constant `b` with the value `26`

a = 15; // Assign the value `15` to the variable `a`

console.log("a =", a, "b =", b);

a = []; // Assign an empty array to the variable `a`

a[0] = 5; // Assign the value `5` to the first element of the array `a`

console.log("Array:", a); // Print the array `a`

// why tf is this important? cause it kinda explains itself
// while its simple, its essential to distinguish it from anither operattion called 'equal to'

// Mathamatical Operations____

// addition "+"
// subtraction "-"
// multiplications "*"
// division "/"
// remainder or modulo "%"
// exponents "**"

// imma gonna skip on addition, subtraction, multiplication and division ans go for those other two

// Reminder (Modulo)_____

// this operetion returns the reminder of a division and uses % operator

console.log(77 % 10); // it shows as 7
// wait lemme check
console.log(77 / 10); // its 7.7
// wait whaaaaaat.

// ok im back after my very first youtube meaning hunt

// so bsically it culculates how many time it could be devided parfectly without decimanls and find how many numbers are there left over that cannot be used it the division
// yeah yeah thats a lot
// let me put it in terms of code

console.log(9 /  3); // this returns 3 cause its a perfect divition with no decimal places
console.log(9 % 3); // this will return 0 cause there is no remainig number in the division

// however if i do 
console.log(10 / 3); // this now will show the results of 3.3333333~ thus making it not a perfect division
// therefore
console.log(10 % 3); // the answer will show up as 1 cause 3 can be divided 3 times there. 3+3+3 = 9 and however we cant divide it one more time cause 2 numbers are missing for it to be devided once again
// therefore 10 - 9 = 1

console.log(15 / 5); // which shows 3

console.log(15 % 4); // it will show 3 cause 4 can be divided until 12 and and no more. 13, 14, 15 however for it to be perfectly devided one more time the number should be 16
// so there is a reminder of 3 numbers unused.
// therfore the results show 3

// man that was tricky ish
// i mean ince you understand the consept its pretty easy

// Exponent_____

// this operation raises a number to to a certain power
// its performed using **

console.log(10 ** 2); // it basically ^ symbol for the computers

// Priority of Execution Operations_____

// Exponents (**) --> multiplication (*), division(/), modulo (%) --> addition (+), substraction (-)
// NOTE: if the operations have the same priority, it will be excecuted from left to right
// you can use parentheses aka brackets () to modify the priority

console.log(25 + 7 * 2 ** 3); // so its culculated like ((2^3)*7)+25 = 81
console.log((25 + 7) * 2 ** 3); // cuslculated as (25 + 7) = 32, 2^3 = 8, 8*32 = 256
console.log(((25 + 7) * 2) **3); // culculated as 25 + 7 = 32, 32 * 2 = 64, 64^3 = 262,144

// NOTE:the parenthesis or the brackets () have the highest priorities. from the most inner one followed by the shallower one and so on

