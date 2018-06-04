/* ECMAScript 2016 (ES6) - Example 1 */
let cars = ['Ford', 'BMW', 'Tesla'];

cars.forEach(function (color) {
    console.log(color);
});

/* ECMAScript 2016 (ES6) - Example 2 */
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

function adder(number) {
    sum += number;
}

numbers.forEach(adder);

console.log(sum);
