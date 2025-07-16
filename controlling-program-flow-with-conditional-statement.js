// Mastering if Statement_____

// conditions in js provide control over execution flow. means using things like ( if / else) to make the code take different paths insted of going from top to bottom

// IF Statements_____

// the ( if ) keyword allow you to open a code block that can be excecuted if the boolean is true

if (true) {
    console.log("this is true");
}

if (false) {
    console.log("this is false"); // this shit wont run since its false
}

// like shown above if statements begin with if keyword, followed by the condition enclosed in parentheses (), and a code block inside the curly braces {}

// en expression, as well as a value, can be considered as a condition

let a = 999;

if (a > 892) {
    console.log("the variable a is greater than 892");
}

if (a > 1000) {
    console.log("the variable a is greater than 1000"); // which will not print since its not
}

if (a < 1000) {
    console.log("the variable a is less than 1000");
}

if (a == 999) { 
    console.log("the variable a is equal to 999");
}

// we are not limmited to perform operations solely inside the code block
// meaning we can change data which we can use later???
// dont understand it fully yet

let b = 5;
let c = 3;
let d;

if ( b > 0 && c > 0) {
    d = b + c;
    console.log("d = ", d);
}

if ( b < 6 && c < 6) {
    d = b - c;
    console.log("d = ", d);
}

console.log(b, c, d);

// the last console shows 5 33 and 2
// two is the last number d was assigned

// Using ELSE for Alternative Outcome_____

// if statement excecute under specific conditions and does not create true branching in the code
// to introduce a behavour, we can use else in combination with if statement to create conditional statement

let e = 1;

if ( e > 2) {
    console.log("output of if statement");
}

else {
    console.log("output of else");
}

if ( e < 2) {
    console.log("output of if statement");
}

else {
    console.log("output of else statement");
}

// NOTE: when using  an else statement do not use the end command ( ; ) after if  and the code block {} or else will result in a syntaxerror.
// consider if else statement as a single command

// Applying ELSE IF for multiple conditions_____

// now look at this code

let f = 11;

if (f > 15) {
    console.log("greater than 15")
}

if (f > 10) {
    console.log("greater than 10")
}

if (f > 5) {
    console.log("greater than 5")
}

// as you can see it logs like 
// greater than 10
// greater than 5

// this is not the behaviour you want when you want to execute only one condition
// the else statement will not work in this condition cause there are multiple conditions

// fucking introducing else if
// it allows to select specific code block from our series of conditions

/*
if (condition) {
    // first 'if' code block
} 
else if (condition) {
    // first 'else if' code block 
}
else if (condition) {
    // second 'else if' code block
*/

let g = 10;

if (g > 11) {
    console.log("11 is greater than 10")
}
else if (g < 5) {
    console.log("10 is less than 5")
}
else if (g > 9) {
    console.log("10 is greater than 9") // so basically this gets printed out
}
else if (g < 12) {
    console.log("10 is less than 12") // even though this is correct the previous one gets printed cause it came first
}
else {
    console.log("none of the above meets the condition")
}

// like mentioned earlier even if one meets a condition the rest of the chain gets interepted
// this structure is useful when you need just one of the conditions to be satisfied