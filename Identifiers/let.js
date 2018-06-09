/* ECMAScript 2016 (ES6) - Example 1 */

/*
`let`, is a signal that the variable
 may be reassigned, such as a counter in a loop,
 or a value swap in an algorithm.
 It also signals that the variable will be used
 only in the block it’s defined in, which is not
 always the entire containing function.
 */

let title = 'Junior Software Engineer';
let hourlyWage = 40;

console.log(title);
console.log(hourlyWage);

// Some time later...
title = 'Senior Software Engineer';
hourlyWage = 45;

console.log(title);
console.log(hourlyWage);
