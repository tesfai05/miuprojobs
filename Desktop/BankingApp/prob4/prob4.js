
"use strict"
let calculateAverage=function(...numbers){
    let sum=0;
    let countArray=numbers.length;
   for (let i = 0; i < numbers.length; i++) {
       sum= sum + numbers[i];
   }
   console.log(`The average of (${numbers}) ` + (sum/countArray));
}

console.log(calculateAverage(1,2,3));
console.log(calculateAverage(1,2,3,4));
console.log(calculateAverage(1,2,3,4,5,16.6));