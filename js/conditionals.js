"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color){
//     if(color === 'red'){
//         console.log('Arcturus is a red giant');
//         alert('Arcturus is a red giant');
//     } else if(color === 'orange'){
//         console.log('Enif is a orange supergiant');
//         alert('Enif is a  orange supergiant');
//     } else if(color === 'yellow'){
//         console.log('Decapoda is a yellow supergiant');
//         alert('Decapoda is a yellow supergiant');
//     } else if(color === 'green'){
//         console.log('Andromedae Alpha is a green dwarf');
//         alert('Andromedae Alpha is a green dwarf');
//     } else if(color === 'blue'){
//         console.log('Rigel is a blue supergiant');
//         alert('Rigel is a blue supergiant');
//     } else {
//         console.log('I am not real sure what stars are that color');
//         alert('I am not real sure what stars are that color');
//     }
// }
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//analyzeColor(randomColor)
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


function analyzeColor() {
    var colorChoice = prompt("What color of star would you like to know about?");
    switch (colorChoice.toLowerCase()) {
        case "red":
            alert("Arcturus is a red giant");
            console.log('Arcturus is a red giant');
            break;
        case "orange":
            alert("Enif is a orange supergiant");
            console.log("Enif is a orange supergiant");
            break;
        case "yellow":
            alert("Decapoda is a yellow supergiant");
            console.log("Decapoda is a yellow supergiant");
            break;
        case "green":
            alert("Andromedae Alpha is a green dwarf");
            console.log("Andromedae Alpha is a green dwarf");
            break;
        case "blue":
            alert("Rigel is a blue supergiant");
            console.log("Rigel is a blue supergiant");
            break;
        default:
            alert(colorChoice + " I am not real sure what stars are that color");
            console.log(" I am not real sure what stars are that color");
            break;
    }
}
analyzeColor()
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// this is also in the previous segment of code//
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//I combined some of the to do's on this list for continutiy//

function calculateTotal(){
    var luckyNumber = Math.floor(Math.random() * 6);
    var totalPrice = parseFloat(prompt('What is your total?'));
    var discountAmount = 1;
    if(luckyNumber === 1){
        discountAmount = .10;
        totalPrice = totalPrice - (totalPrice * discountAmount).toFixed(2);
        alert('Your lucky number was: '+ luckyNumber + ',and your total is $'+ totalPrice);
        console.log('Your lucky number was: '+ luckyNumber + ',and your total is $'+ totalPrice);
    } else if (luckyNumber === 2){
        discountAmount = .20;
        totalPrice = totalPrice - (totalPrice * discountAmount).toFixed(2);
        alert('Your lucky number was: '+ luckyNumber + ',and your total is $'+ totalPrice);
        console.log('Your lucky number was: '+ luckyNumber + ',and your total is $'+ totalPrice);
    } else if (luckyNumber === 3) {
        discountAmount = .30;
        totalPrice = totalPrice - (totalPrice * discountAmount).toFixed(2);
        alert('Your lucky number was: ' + luckyNumber + ',and your total is $' + totalPrice);
        console.log('Your lucky number was: '+ luckyNumber + ',and your total is $'+ totalPrice);
    } else if (luckyNumber === 4) {
        discountAmount = .40;
        totalPrice = totalPrice - (totalPrice * discountAmount).toFixed(2);
        alert('Your lucky number was: ' + luckyNumber + ',and your total is $' + totalPrice);
        console.log('Your lucky number was: '+ luckyNumber + ',and your total is $'+ totalPrice);
    } else if (luckyNumber === 5) {
        discountAmount = .50;
        totalPrice = totalPrice - (totalPrice * discountAmount).toFixed(2);
        alert('Your lucky number was: ' + luckyNumber + ',and your total is $' + totalPrice);
        console.log('Your lucky number was: '+ luckyNumber + ',and your total is $'+ totalPrice);
    } else {
        alert('Your lucky number was: ' + luckyNumber + ',and your total is $' + totalPrice);
        console.log('Your lucky number was: '+ luckyNumber + ',and your total is $'+ totalPrice);
    }
}
calculateTotal()

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// this was completed in the previous segment of code //


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function isNegative(num) {
    if (typeof num === 'number' && Math.sign(num) === -1) {
        return true;
    }
    return false;
}

function numberGame (){
    let result = confirm("Would you like to enter a number? Click OK");
    if (result === true){
        if (isNaN())
        let numbers = parseInt(prompt("what number would you like to use"));
        let isEven = numbers % 2 == 0 ? "Your number is even" : "Your number is odd";
        let sumOne = numbers + 100;
        console.log('The number entered is: '+ numbers);
        alert('The number you picked is: '+ numbers);
        alert('The sum of 100 + your number is: '+ sumOne);
        alert(isEven);
        alert('The number is a negative number: '+isNegative(numbers));
    }else {
        alert('Awe, you did not quite make it, thanks for playing numberGame!');
        console.log('Awe, you did not quite make it, thanks for playing numberGame!');
    }
}
numberGame()