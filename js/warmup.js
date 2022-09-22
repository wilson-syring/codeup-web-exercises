'use strict'
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