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