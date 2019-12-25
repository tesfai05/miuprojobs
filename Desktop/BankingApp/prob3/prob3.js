"use strict"
function multiplesCount(numbers,b){
  return numbers.filter((o) => o%b == 0).length;
}
let x=multiplesCount([1,2,3,4,5,6],3);
console.log(x);
let y=multiplesCount([1,2,3,45,6,7,8,9,10,11,12,13,14,15],5);
console.log(y);