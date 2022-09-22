'use strict'
let numArr = [5,8,2,6,9,3,2];
function sortArray(array) {
    console.log(array.sort(function(a, b){return a - b})) ;
}
sortArray(numArr);
let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
function readBooks (array){
    for (let i = 0; i < array.length; i++)
    {
        let book = `${array[i].title} by ${array[i].author}.`;
        if (array[i].readingStatus) {
            console.log("Already read: " + book);
        } else
        {
            console.log("You still need to read: " + book);
        }
    }
}
readBooks(library);