'use strict'
//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement
// to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1
// and 50, except for the number the user entered.
// This code is a collaberation of mine, John-Krask, Hector, and Aldanis. so that no plagerism is accused on any of the parties.
let oddNum = parseInt(prompt("Pick a odd number between 1 and 50"));
console.log("the number chosen was: "+oddNum);
for (let i = 1; i < 50; i+=2) {
    while(oddNum % 2 === 0 || oddNum > 50 || oddNum < 0){
        alert("That not an odd number between 1 and 50");
        oddNum = parseInt(prompt("Pick a odd number between 1 and 50"));
        console.log("the number chosen was: "+oddNum);
        continue;
    }if(i === oddNum){
        console.log("Yikes! Skipping the chosen number: "+ oddNum);
        break;
    }if(i !== oddNum){
    console.log("here is and odd number: "+ i);

    }
}
