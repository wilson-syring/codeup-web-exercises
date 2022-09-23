'use strict'
//Create a function named showMultiplicationTable that accepts a number
// and console.logs the multiplication
// table for that number (just multiply by the numbers 1 through 10)

let showMultiplicationTable = function(number){

    for(let i = 0; i <= 10; i++){
        const result = i * number;
       console.log(number + "*" + i + "=" + result);
    }
}
showMultiplicationTable()

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
//and output to the console whether each number is odd or even. For example:

for(let i = 0; i <= 10; i++){
    let randomGen = Math.floor((Math.random()*200)+20);
    let test = randomGen % 2;
    if(test === 0){
        console.log("The number " + randomGen + " is an even number!");
    } else {
        console.log("The number "+ randomGen + ' is a totally odd number!');
    }
}

//Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

let string = "";
for(let i = 1; i <= 9; i++){
    for(let j = 1; j <= i; j++){
        string += i;
    }
    string += "\n";
}
console.log(string);
// repeat method version
for (let i = 1; i < 10; i++){
    console.log(i.toString().repeat(i));
}

//Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// for(let i = 0; i < 20; i++){
//     console.log(100 - (i * 5));
// }

for(let i = 100; i > 5; i-=5){
    console.log(i);
}


