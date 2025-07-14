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

// Assignment Operators_____

// assignment apparantly can streamline the code, making it more readable and elegant
// js has several assignment oprators

// additional assignment ( += )
// subtraction assignment ( -= )
// multiplication assignment ( *= )
// division assignment (/=)
// reminder (modulo) assignment ( %= )
// exponentiation assignment ( **= )

// as mentioned before, assignment operators are used to enchance code readability
// consider the following example
let c = 17;
c = c + 5;

console.log(c);

// but we can write the code more beautiful like this

let d = 17;
d += 5;

console.log(d);

// the expression a += 5 is yields the same result as a = a + 5

let e = 5;
let f = 6;
let g = 7;
let h = 8;
let i = 9;
let j = 10;

e += j;
f *= i;
g /= h;
h %= j;
i **= e;
j /= f;

console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);

// well whatever, you get the point

// Increment and Decrement Operators_____

// increment and Decrement are operators that increase or decrease a varuiable by 1

// Increment_____

// its performed using ++ operator

let k = 1;

k++; // seams like no space is given

console.log(k);

// Decrement

// as you have already guessed it, its performed using -- operator

k--;
k--; // reduces 2 times so now the number should be zero

console.log(k); // allright 

// NOTE: the expression k++ is same as k = k +1 or k += 1
// vice verser

// Comparison Operators_____

// comparison operators are used to define a condition, perform checks and make decisions. these operators return a boolean ( true or false )

// equals to ( == )
// srict equals to ( === )
// not equals to ( != )
// strict not equals to ( !== )
// greater than ( > )
// greater than or equals to ( >= )
// less than ( < )
// less than or equals to ( <= )

// Equal and Not Equal_____

console.log("Equal to:");
console.log("5 == 5 is", 5 == 5); // this is correct
console.log("5 == 4 is", 5 == 4); // not correct
console.log("5 == 4.99 is", 5 == 4.99); // not correct
            
console.log("Not equal to:");
console.log("5 != 5 is", 5 != 5); // not correct
console.log("5 != 4 is", 5 != 4); // is correct
console.log("5 != 4.99 is", 5 != 4.99); // is correct

// Strict Comparison

console.log("Equal to:");
console.log("5 === 5 is", 5 === 5); // this is correct
console.log("5 === 4 is", 5 === 4); // not correct
console.log("5 === 4.99 is", 5 === 4.99); // not correct
            
console.log("Not equal to:");
console.log("5 !== 5 is", 5 !== 5); // not correct
console.log("5 !== 4 is", 5 !== 4); // is correct
console.log("5 !== 4.99 is", 5 !== 4.99); // is correct

// bruh whats the use of diferentiating it
// why have strict and unstrict

console.log(null == undefined);   // true
console.log(null === undefined);  // false

// whaat

// so the == operator performs type coercion. it convers one operand so their types match, then conpares value.
// the === operator skips coercion and compares both type and value directly

// so what that means is technically saying null does mean undefined but === compares the word for word, not the meaning?
// thats what i understood

// Greater ans Less_____

console.log("5 > 5 is", 5 > 5); // which is not correct since they are the same number
console.log("5 > 4.99 is", 5 > 4.99); // is correct
console.log("5 > 5.0000001 is", 5 > 5.0000001); // is false. come on man

console.log("5 < 5 is", 5 < 5); // still not true
console.log("5 < 4.99 is", 5 < 4.99); // naah
console.log("5 < 5.0000001 is", 5 < 5.0000001); // yep

// Greater/Less than or Equals_____

console.log("5 >= 5 is", 5 >= 5); // they are equal so true
console.log("5 >= 4.99 is", 5 >= 4.99); // is true
console.log("5 >= 5.0000001 is", 5 >= 5.0000001); // nope

console.log("5 <= 5 is", 5 <= 5); // still is equals to so true
console.log("5 <= 4.99 is", 5 <= 4.99); // nah
console.log("5 <= 5.0000001 is", 5 <= 5.0000001); // yes

// Logical Operators_____

// is used to manipulate and make decisions based on boolean values

// there are three js logical operators

// AND ( && )
// OR ( || )
// NOT ( ! )

// AND (&&)_____

console.log(true && true); // is true
console.log(true && false); // is false
console.log(false && true); // is false
console.log(false && false); // is true

// kinda works like multiplications + and -
// + * + = +
// + * - = -
// - * + = -
// - * - = +

// kinda like that

// OR ( || )

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// The OR (||) operator returns false only when both values are false.

// NOT ( ! )

console.log(!true); // is false cause i said its not ture
console.log(!false); // is true cause i said its not false

// Using Logical Operators_____

// logical operators are often used to combine condition

let l = 5, m = 3;

console.log(l > 4 && m > 4); // is false cause 5 is greater than 4 but 3 is not greater than 4 and in and (&&) true and a false = false
console.log(l > 1 && m > 1); // is true cause both sides are correct

// Priority_____

// logical operations have lower priority than conparison operators, which in turn, have lower priority than math operators

// NOT ( !) --> AND ( && ) --> OR ( || )

// similar to other operators, you can use parentheses () to adjust priority

// i hereby interept this program to tell you im editing this on my other leptop
// you can git clone https://github.com/mosscore-space/learning-js.git
// after editing push the edited to git
// then simply do git pull origin master when editing in my other leptop
// lets see if this will work
// moss windows over and out 