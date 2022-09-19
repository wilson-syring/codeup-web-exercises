(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['Kenneth', 'Laura', 'Trevor', 'Ana'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("There are "+names.length+" names in this array");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("This is the first name in the array: "+names[0]);
    console.log("This is the second name in the array: "+names[1]);
    console.log("This is the third name in the array: "+names[2]);
    console.log("This is the fourth name in the array: "+names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log(`This is a name of one of my instructors: ${names[i]}!`);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
        console.log('Here is an Epic name: ' + name + '.');
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function firstIndex(array){
        return array[0];
    }
    firstIndex(names)
    function secondIndex(array){
        return array[1];
    }
    secondIndex(names)
    function LastIndex(array){
        return array[array.length-1];
    }
    LastIndex(names)
})();
