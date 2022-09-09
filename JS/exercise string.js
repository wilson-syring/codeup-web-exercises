// You have rented some movies for your kids:
// The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
let LittleM = 3;
let BrotherB = 5;
let hercules = 1;
let price = 3;
let total = price * LittleM;
total += BrotherB * price;
total += hercules * price;
console.log('Your price today is '+ total)

// Suppose you're working as a contractor for 3 companies: Google,
// Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
let google = 400;
let amazon = 380;
let facebook = 350;
let faceHour = 10;
let googleHour = 6;
let amazonHour = 4;
let total2 = google * googleHour;
total2 += amazon * amazonHour;
total2 += facebook * faceHour;
console.log('Your wages are '+ total2)
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// A student can be enrolled in a class only if the class
// is not full and the class schedule does not conflict with her current schedule.
let classes = 29;
let classTime = 1100;
let studentSchedule = [1400, 1530, 1700]

let scheduleConflict = studentSchedule.indexOf(classTime)
console.log(scheduleConflict)

console.log((classes <= 30 && scheduleConflict == -1))
// A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired.
// Premium members do not need to buy a specific amount of products.
let items = 3;
let offer = true;
let premiumMember= false;

console.log(((items > 2 || premiumMember === true) && offer === true))

// exercise 4 Create a variable that holds a boolean value for each of the following conditions:
//
// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

let username = 'codeup';
let password = 'notastrongpassword';

let passOverFive = password.length >=5;
let noUserNameInPass = (password === password.replace(username, ''));
let userNamelength = username.lentgh < 20;
let noWhiteSpace = (password.length === password.trim().length) && (username.length === username.trim().length);
console.log('Your password is over 5 characters: '+ passOverFive, 'There is no username in password: '+ noUserNameInPass,'The username is less then 20: '+ userNameLength,'There is no white space around the password:' + noWhiteSpace)
console.log