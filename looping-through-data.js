// ok in windows you dont use touch to create a new file
// you use "" >
// bro what kind of command is that

// Understanding the While Loop_____

// loops are code blocks that can get excecuted when a specific condition is true
// like if and else statements?
// if and else statements checks the code one time and stops when their condition gets fulfilled
// however loops, you guessed it, keeps looping and checking, running repeatedly

// there are three kinds of loops
// while;
// do-while;
// for;

// While Loop_____

// this is the simplest type of loop
// it continues to be excecuted while the code block is true

// to create a while loop, use while keyword and then the condition in a parentheses enclsed by a code block

/*
while (condition) {
    // code block
}
*/

let a = 5;

while (a <= 10) {
    console.log("a = ", a);
    a++;
}
 
// while loop checks the condition before executing a code block
// if the conditions is intially false the code block does not get executed

// Using the Do-While Loop for Iteration_____

// this loop has is a bit simmilar to while loop
// but the key difference is 
// while
// executes after the condition check
// do-while
// executes before the condition check

/*
do {
    // code block
} while (condition)
*/

let b = 0;

do {
    console.log(b);
    b++;
} while (b <= 3 && b >= 1);

// the code within do is guerenteed to be executed atleast once

// while loop
while (false) {
    console.log("while"); // not executed since it checks the condition before execution
}

// do-while
do {
    console.log("do-while"); // executed once since it runs the code block before checking condition
} while (false);

let pin = "1234";
let attempt = 0;

do {
    console.log("INVALID PIN");
    attempt++;
} while (pin !== "0000" && attempt < 3);

// mastering for loops_____

// the for loop can be challenging in the begining

// it uses the for keyword and requires three parameters enclosed in parentheses

/*
for (initialization; condition; increment/decrement) {
    // code block
}
*/

// breackdown of there parameters

// Initialization: this is where you intialize a new counter used by the for loop
// its executed only once
// it means this intialize thing in for loop is gonna be used as your counter
// but whats counter you say
// its simply the variable that tracks how many times tou have gone through the loop
// this is the the thing you initialize (like start off the loop by giving the counter its first value) test the condition and then increment or decrement

// condition: an expression checked before each itiration, similar to the while loop

// increment/decrement: operations performed on the counter at the end of each loop iteration

for (let c = 1; c < 5; c++) {
    console.log("loop iteration: ", c);
}

// NOTE: an itiration refers to the number of times a code block is executed or each time the code block gets executed its considered an itiration
// the above example can be written like this

// step 1 -  counter initialization
let d = 1;

// step 2 - main loop body
while (d < 5) {
    console.log("loop iteration:", d);
    d++; // increment operation
}

// also dont forget aboout the decrement d--;

// different expressions for dicrement and increment can be used as well

for (let e = 0; e < 40; e += 7) {
    console.log("e =", e);
}

// the for loop is unique in its scope so we dont have to worry about counter names conflictiong with other variables

let f = 2025;
console.log("global:", f);

for (f = 2000; f < 2010; f++) {
    console.log("for:", f);
}

console.log("global2:", f);

// guys this example is wrong
// can you guess why
// i did not declare the counter f in the loop
// i have to write let f = 2000; otherwise its gonna use the same f as global and update the global one as well

let g = 2025;
console.log("global:", g);

for (let g = 2000; g < 2010; g++) {
    console.log("for:", g);
}

console.log("global2:", g);
// yes now it worked as intended

let animal = "tiger";
for (let h = 1, i = 1; h <= 5; h++, i++) {
    console.log(i, animal);
}
// yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas
// it shows as 
// 1 tiger
// 2 tiger
// 3 tiger
// 4 tiger
// 5 tiger

// basically i wanted to add the numbers in the front of the string tiger

// Breacking Out of Loops with Breack_____

// the breack keyword is a loop terminator
// allowing you to exit a loop prematurely

let j = 1;

while (true) {
    console.log("iteration:", j);
    j++;
    if (j > 5) {
        break;
    }
}

// as you can see this one is actually an infinite loop
// however i used break to break the loop when it reached 5

let k = 0;

for (let i = 0; i < 10; i++) {
    k += i;
    console.log("k=", k);
    if (i > 5) {
        break;
    }
}
// in this loop
// k is initialy 0
// k=0
// and i = 0

// i = 0, k = 0 + 0 = 0
// i = 1, k = 0 + 1 = 1
// i = 2, k = 1 + 2 = 3
// i = 3, k = 3 + 3 = 6
// i = 4, k= 6 + 4 = 10
// and so on until i became 6

while (true) {
    console.log("itiration start");
    break;
    console.log("itiration end"); // this was not printed
}

console.log("loop was ended");
// the loop was ended mid loop and completely did not run the rest of the code

// NOTE: the break statement is powerful tool for controlling the flow of the loops
// sllowing you to exit them when specific cindtions are met

// Skipping Iteration with Continue_____

// skipping iterations early_____
for (let i = 0; i < 10; i++) {
    if (i <5) {
        continue;
    }

    console.log("i =", i);
}

// the continue keywoed allows you to skip the remaining code within a loop for the current iteration and proceed to the next iteration

// in the above example
// it skipped from 1 to 4 and started from 5 onwards

// skipping a specific iteration
for (let i = 1; i <= 5; i++) {
    console.log("iteration started:", i);
    if (i == 3) {
        continue;
    }
    console.log("iteration ended:", i);
}

// NOTE: the continue keyword works similarly to break, but instead like the break, that terminates the loops entirely, but continue simnply skips that itiration and process and continue with the next itiration

const users = ["alice", "bob", "banned", "charlie"];

for (let i = 0; i < users.length; i+=1) {
    if (users[i] === "banned") {
        continue;
    }
    console.log("welcome,", users[i]);
}

// so i did get it correct cause i understood the vision of the question
// but i need to fully see what is happening here

// so in the i < users.lenght; it is for checking which number of element we are seeing
// in first file ever in the array section, right after the push section arr.length was introduced
// so this arr.length or in this case uses.length just returns how many items are in an array
// in this example users.lenght is equal to 4

// and in the if (users[i] ==== banned) case
// we dont just put users[2] in this case which is banned
// in the for loop i is equal to 0 
// and after checking if i is a less number than the amount of items in the array and then we are incrementing it by 1 each time
// so in if statement first i is 0 so it welcomes alice
// the i is 1 now and it welcomed bob 
// but when i became 2 the string in the array matches with the ccondition and that intiration was skipped