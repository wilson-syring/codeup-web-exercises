'use strict'
//Warmups for Thorsday Sept 22 2022
// Create a function to sort the array from lowest to highest. Make sure the function accepts an array and returns an array.
let numArr = [5,8,2,6,9,3,2];
function sortArray(array) {
    console.log(array.sort(function(a, b){return a - b})) ;
}
sortArray(numArr);

//Write a function that returns the reading status of each of the following books:
let library = [
    {author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true
    },
    {author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true
    },
    {author: 'Suzanne Collins', title:  'Mockingjay: The Final Book of The Hunger Games', readingStatus: false
    }];

function readBooks (array){
    for (let i = 0; i < array.length; i++) {
        let book = `${array[i].title} by ${array[i].author}.`;
        if (array[i].readingStatus) {
            console.log("I have already read this book: " + book);
        } else {
            console.log("I still need to read this book: " + book);
        }
    }
}
readBooks(library);

function isOddNum(num){
    if(isNaN(num) || num % 2 === 0){
        return false;
    }
        return true;
}
isOddNum();

function isEvenNum(num){
    if(isNaN(num) || num % 2 !== 0){
        return false;
    }
    return true;
}
isEvenNum();

function identify(input){
    return typeof input;
}
identify();

const arr = [1,2,3,4,5,6,7,8,9,10];
function getEvenNums() {
    let theEvens = arr.filter (number => number % 2 == 0);
    console.log(`The even numbers are: ${theEvens}`)
}
getEvenNums(arr);
//Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.