// yo yo gonna intialise git repo now
// ok i successfully did it
// 1. git init
// 2. the repo was in /home/ma name/.git - did not know that and then did git add .
// omg i feel like the whole freaking os was cloned
// 3. git reset - git status - should see something like nothing added to commit
// 4 cd to the correct folder
// 5. git add . - boo shaka laka im back in business
// 6. git commit -am "initial commit"
// 7. wait not yet
// 8.git remote add origin (add the repo link here. ofc remove the brackets. its not needed)
// 9. git commit -am "initial commit"
// 10. git push origin master

//start
// js does not need to define a main fuction like c, c++, java, etc. You can directly write your code.

console.log("Hello World!");
// consol.log() serves as a method on printing values to the consol
// the " " are indicating the text as plain text and not as a function
// the semicolon ; shows the ending of a command

// <-- these are single line comments
// console.log("test 1")
// as you can see the command is not excecuted
// you can add it to the end of a command as well

console.log("test 2"); // like this

// then there is multi-line comments
// you have to write /* at the start and */ at the end
/*
console.log("test 3");
console.log("test 3.1");
console.log("test 3.2");
console.log("test 3.3");
console.log("test 3.4");
console.log("test 3.5");
*/
// like that
// also can use it inside code

console.log("test 4",/*"test 5", */"tests 6");

// ok somethings have happened, lets see if its ok now

// Variables_________________________________________________________________

// variables allow storing and reusing of values
// ** a variable is like a container holding different data types, such as numbers, text or more complex structures. **
// a variable should be defined as a variable with the keyword 'let' then choose a name fot it

let variableName;

// variable names should follow camelcase style; means that words are written togther without spaces and each word (except the first) is capitalised
// by default variables contains 'undefined' value, indicating that no value has been assigned

// you can assign a value using the assignment operator (=)

let x;
x = 5;

// or you can assign the value when the variable is defined

let y = 13;

// Using Variables_____________________________________________________________

// variables can be used to represent various values in the code and can be used multiple times; reducing code repetition

let word = "variable text"; // sets the word variable as variable text

console.log(word); // prints the variable value

// you can assign and reassign value to variables

let numb;
numb = 100;
console.log(numb);

numb = 100 + 20;
console.log(numb);

//*****//
// wait wait.. does this mean if i used the a word as a variable and if i forgot and used it agin later down the code for another thing, the previous one would just end there?????
/* **chat gpt**
Think about what happens when you assign to the same box twice. The second assignment simply replaces whatever was there before.

Hint: When you do*/
let one = "First"; // …some code…
one = "Second";
console.log(one); // ?
/*what gets logged
If you need to keep both values around, what could you do instead of reusing word? Perhaps give each its own name.
Try writing a tiny snippet that assigns to one variable, reassigns it, and then logs it after each step. What do you observe?*/

// wait the consol only printed second
// what happened to the first?
// reassigned before it got ececuated?

/* **chat gpt**
Exactly. The second assignment overwrote the first. Your console.log will only show the latest value.

If you need to retain both, you could:

    Use two variables (e.g., firstWord, secondWord)
    
    Store values in an array
*/
let firstWord = "Hello";
let secondWord = "World";
console.log(firstWord, secondWord);

// or

let words = ["Hello"];
words.push("World");
console.log(words);
//*****//

// ok back to business
// variables could be used used multiple times. in an example if you have written 1000 lines of code and found out that there is a typo that apears in multiple lines.
// in such case going back and correcting multiple lines is a waste of time.
// in such cased you can do something like this

console.log("Hello Word!");
console.log("I love this Word!");
console.log("I need to live in this Word!");
console.log("This Word is the best!");

// in this example the coder accidentally did not write the letter 'l' in 'world'
// in such cased you could so something like this

let z = "World";

console.log("Hello " + z + "!");
console.log("I love this " + z + "!");
console.log("I need to live in this " + z + "!");
console.log("This " + z + " is the best!");

// wait a freaking minute
// are they saying write let z = "world"; from the get go at the begining of coding or do it ones the issue was identified. cause if we do it after the issue was identified then its same as
// changing it mannualy

//*****//
// **chat gpt **
//It’s all about planning your values up front so you don’t end up hunting for typos later.
//*****//

// so basicaly at the start cause you dont wanna go on a typo hunt in the middle of a coding session

// Using const for Constants____________________________________________________

// const is another way of defining variables
// the difference between 'let' and 'const':
// let; allows changes to the variables value
// const; does not allow change to their values

const myNumber = 10;

// lets look at an example

let a = 5;
console.log(a); // print the intial value of 'a'

a = 10;
console.log(a); // print the updated value of 'a'

// in contrast the const behaves differently and will give out an error -  TyprError: Assignment to a constant variable
// a constant cannot be changed
/* <--- commented out cause the debugger wont g any further than this
const b = 7;
console.log(b);

// attempting to reassign a 'const' variable will result in an error
b = 8;
console.log(b);
*/
/*
Uncaught TypeError TypeError: Assignment to constant variable.
    at <anonymous> (file:///home/shaiman/mosscore/learning-js/first-file-ever.js:176:3)
    at <anonymous> (node:internal/modules/cjs/loader:1692:14)
    at <anonymous> (node:internal/modules/cjs/loader:1824:10)
    at <anonymous> (node:internal/modules/cjs/loader:1427:32)
    at <anonymous> (node:internal/modules/cjs/loader:1250:12)
    at traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at executeUserEntryPoint (node:internal/modules/run_main:152:5)
    at <anonymous> (node:internal/main/run_main_module:33:47)
Process exited with code 1
*/

// Using const___________________________________________________________________

// constants are used as immutable variables. you can define a constant and use it multtple times
// const provide data integrity while allowing for quick refactoring

// ** Refactoring ** - refers to making structural changes to code such as modifying values, variable/fuction names etc..

// example: consider 'maxHeight'. you can adjust the height element of a site by changing just one factor in the code. 
// also its important to note that you cannot change the maximum height during the run time ensuring data integrity

const maxHeight = 250;

console.log(maxHeight - 15);
console.log(maxHeight - 12);
console.log(maxHeight -5);


// Data Types_____________________________________________________________________

// data types tells the interpreter how to work with the data
// lets look at an example

// first case
console.log("123" + "123");  // the result shows as 123123

// second case
console.log(123 + 123); // the result shows as 246

// as you can see the operation above, the intepreter performs diffrerent operations on different data types

// typesof()_____________________________________________________________________

// the typesof() operation returns a string indicating the type of operands value
// tf does that mean

//*****//
// **chat gpt**
// Think of typeof as a tool that tells you, in words, what kind of data you’re dealing with. 
// each typeof call evaluates to a string—like "number", "string", or "boolean"—that names the data type of its operand.
// So “returns a string indicating the type” means the result you get back is itself text describing the kind of value you passed in.
//*****//

// so basically it returns what type of value that was given

let c = 15;
console.log(typeof 23);
console.log(typeof a);

// these both are shown as numbers in the console

const b = "today";
console.log(typeof "word");
console.log(typeof b);

// these two are shown as strings in the console

// ok.. fancy i like it but what is it used for?

//*****//
// **chat gpt**
// Debugging or logging
// When you’re not sure what kind of value a variable holds at runtime
// Branching based on type
// You want to handle numbers differently from strings
// Think of typeof as a first gatekeeper whenever your code needs to adapt to different kinds of inputs.
//*****//

// ok so useless for now. might come handy later

// Number___________________________________________________________________________

// number data types is used for calculations, containers, mathematical operations, etc..
// unlike other programming laguages js uses the number type(literaly means just numbers) instead of separate int and float types

console.log(typeof(15.25));
console.log(typeof(211));

console.log(typeof(22 + 251));
console.log(typeof(26 / 342));

// NOTE: typeof is used in here to show that its a number type

// String__________________________________________________________________________

// the string is a data type used to change pront and pass text to other programs

let str = "Hello! I'm string, and I should help you to work with text!";
console.log(str);

// inorder to identify the string in the code, we should use single or double quotes 'some text' or "some text"

console.log("text");
console.log('text');

console.log(typeof("10"));

// ye ye

// Boolean_________________________________________________________________________

// tf is that
// so boolean is a data type that is used for logical operations. it has two values; true or false.
// boolean are used to check cinditions.
// booleans allow you to control code excecution and direct it along different paths

console.log(typeof(true));
console.log(typeof(false));

console.log(true);
console.log(false);

console.log(25 > 15);
console.log(15 > 25);
