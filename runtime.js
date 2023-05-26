const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

console.log('<---------- EXTRA LARGE ARRAY ---------->')

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);

//Try it with large array

console.log('<------------- LARGE ARRAY ------------->')

perf.start();
doublerAppend(largeArray);
let largeResultsAppend = perf.stop();

perf.start();
doublerInsert(largeArray);
let largeResultsInsert = perf.stop();

console.log("append", largeResultsAppend.preciseWords);
console.log("insert", largeResultsInsert.preciseWords);

console.log('<------------- MEDIUM ARRAY ------------->')

perf.start();
doublerAppend(mediumArray);
let mediumResultsAppend = perf.stop();

perf.start();
doublerInsert(mediumArray);
let mediumResultsInsert = perf.stop();

console.log("append", mediumResultsAppend.preciseWords);
console.log("insert", mediumResultsInsert.preciseWords);

console.log('<------------- SMALL ARRAY ------------->')

perf.start();
doublerAppend(smallArray);
let smallResultsAppend = perf.stop();

perf.start();
doublerInsert(smallArray);
let smallResultsInsert = perf.stop();

console.log("append", smallResultsAppend.preciseWords);
console.log("insert", smallResultsInsert.preciseWords);

console.log('<-------------- TINY ARRAY ------------->')

perf.start();
doublerAppend(tinyArray);
let tinyResultsAppend = perf.stop();

perf.start();
doublerInsert(tinyArray);
let tinyResultsInsert = perf.stop();

console.log("append", tinyResultsAppend.preciseWords);
console.log("insert", tinyResultsInsert.preciseWords);

/* QUESTION #4 PARAGRAPH
    Well, I got some interesting results. For some reason, the 
    medium array defies expectations. The "insert" function using the 
    unshift method is actually faster... however I don't know why. 
    In all other examples, "append" function is always faster. I 
    can tell because the time is generally slower, plus I understand
    how both the unshift and push methods work under the hood. 
    
   QUESTION #5 EXTRA CREDIT 
    Why is unshift so slow? Simple. It might be easier to explain
    by comparing to push. Push simply takes a value and adds it
    to the end if the object you're working with and increments
    the index by one. In other words, it is doing one operation per
    index. On the other hand, unshift places the value at the 
    beginning of the array you're working with, requiring that 
    every single element index must be incremented by one, instead
    of a single index being incremented by one. Therefore, each time
    you use the unshift method, the number of operations will be 
    equal to the length of the array. So, if you have a million 
    elements in the array, the computer must perform a million + 1
    operations. 
    */

