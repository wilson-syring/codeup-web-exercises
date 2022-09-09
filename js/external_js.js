'use strict';
//Add a console.log message in external.js
// that says "Hello from external JavaScript".
console.log("Hello from external JavaScript");

//Use the alert function to show a message that says 'Welcome to my Website!'.
alert('Welcome to my Website!');

//Use a prompt to ask for the user's favorite color. Use the user's response
// to alert a message that says that the color entered is your favorite color too.
let favColor = prompt("What is your favorite color");
alert('Awesome, ' + favColor.trim() + ' is my favorite color too!');

// Complete exercise 3 from the previous lesson, but write your code
// in the external.js file instead of in the console.
// When the exercise asks you to use a number, instead
// use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

let LittleM = Number.parseInt(prompt("How long would you like to rent Little Mermaid for?"));
let BrotherB = Number.parseInt(prompt("How long would you like to rent Brother Bear for?"));
let Hercules = Number.parseInt(prompt("How long would you like to rent Hercules for?"));
let price = 3
const total = ((price * LittleM)+(price * BrotherB)+(price *Hercules));
console.log('Your total today is '+ total);
alert('Thank you for renting from Cipher Industries. Your total today is, $'+ total);

let google = 400;
let amazon = 380;
let facebook = 350;
let faceHour = Number.parseInt(prompt("How many hours did you work for facebook?"));
let googleHour = Number.parseInt(prompt("How many hours did you work for google?"));
let amazonHour = Number.parseInt(prompt("How many hours did you work for amazon?"));
let total2 = google * googleHour;
total2 += amazon * amazonHour;
total2 += facebook * faceHour;
console.log('Your wages are '+ total2);
alert('You made entirely too much money this week, check this $'+ total2);

let classFull = confirm("Is the class full");
let scheduleConflict = confirm("Is your schedule open for this class?");
let canEnroll = !classFull && !scheduleConflict;git
alert('Can you enroll in class ' + canEnroll);
console.log('Can you enroll in class ' + canEnroll);

let hatsBought = Number.parseInt(prompt('How many hats would you like purchase today?'));
let offeredExpired = confirm('Has the offer expired?');
let premiumMember = confirm('Are you a premium member');
let canBeApplied = (hatsBought >= 2 || premiumMember) && !offeredExpired;
alert('Can we discount your purchase today? '+ canBeApplied);
console.log('Can we discount your purchase today? '+ canBeApplied);






