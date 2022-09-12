"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(codeup){
    return codeup;
}
alert("Hello, "+ sayHello('codeup') + "!");
console.log('Hello '+ sayHello('codeup') + '!');

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */
let  helloMessage = prompt('What do you call yourself?')
console.log('The user name is, ' + helloMessage)
alert('Hello, '+sayHello(helloMessage))

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Master"
console.log('Thy name is, '+myName)
alert('Hello, '+sayHello(myName))

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(x){
    return x === 2;
}
console.log('the number is '+ isTwo(random));
alert('the number is 2: '+ isTwo(random))
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(x,y){
    return x * y;
}

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
var billAmt = parseFloat(prompt('How much is your bill?'));
var tip = parseFloat(prompt("With a decimal, what percent would you like to tip?"));
console.log('Your bill is: $'+billAmt+' The tip % you chose: '+tip);
alert('Your bill is: $'+billAmt+' The tip % you chose: '+tip);
alert('The tip should be, $'+ Math.round(calculateTip(billAmt,tip)));

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(x,y){
    return x - y;
}
var originalPrice = parseFloat(prompt('What does it cost?'));
var discountPercent = parseFloat(prompt('What percent, with a decimal, is the discount?'));
console.log("The cost is $"+ originalPrice +'The discount is %'+discountPercent);
//used the calculatetip function to complete this instead of writing a new function//
var theDiscount = Math.round(calculateTip(originalPrice,discountPercent));
console.log("The total discount is $"+ theDiscount);
alert("Your total today is $"+applyDiscount(originalPrice,theDiscount));