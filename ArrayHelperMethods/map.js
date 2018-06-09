/* ECMAScript 2016 (ES6) - Example 1 */
const numbers = [1, 2, 3];

const doubled = numbers.map(function (number) {
    return number * 2;
});

console.log(doubled);

/* ECMAScript 2016 (ES6) - Example 2 */
const cars = [
    {model: 'BMW', price: 'CHEAP'},
    {model: 'Camaro', price: 'expensive'}
];

const prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);
