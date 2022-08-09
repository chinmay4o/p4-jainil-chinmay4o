let arr = [2, 23, 3, 45, 12, 76, 11];

console.log(Math.max(arr)); // gives NaN
console.log(Math.max.apply(null, arr)); // gives Max number, Apply takes second param as array

