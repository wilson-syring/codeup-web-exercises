'use strict'
//Create a while loop that uses console.log() to create the output shown below.
//2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
let num = 1
while(num <= 32768){
    num *= 2;
    console.log(num);
}
//An ice cream seller can't go home until she sells all of her cones.
//First write enough code that generates a random number between 50 and 100
//representing the amount of cones to sell before you start your loop.
//Inside the loop your code should generate another random number
//between 1 and 5, simulating the amount of cones being bought
//by her clients. Use a do-while loop to log to the
//console the amount of cones sold to each person.

//Also had issues with this. Aldanis collaborated and helped me understand this better!

let allCones = Math.floor(Math.random() * 50) + 50;
console.log('There are '+allCones+ ' cones to sell today!');
do{
    let numOfCones = Math.floor(Math.random() * 5) + 1;
    if(allCones < numOfCones){
        console.log('Im sorry we dont have '+ numOfCones +', because I only have '+allCones);
    }else if(allCones > numOfCones){
        allCones -= numOfCones;
        console.log(numOfCones + ' cones sold to the customer.');
        console.log("I have " +allCones+" left to sell today");
    }else{
        allCones -= numOfCones;
        console.log("Good job team we sold out!")
    }
}while(allCones > 0)

