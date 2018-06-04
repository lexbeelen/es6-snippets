/* ECMAScript 2016 (ES6) - Example 1 */
let numbers = [1, 2, 3];

let doubled = numbers.map(function (number) {
    return number * 2;
});

console.log(doubled);

/* ECMAScript 2016 (ES6) - Example 2 */
let cars = [
    {model: 'BMW', price: 'CHEAP'},
    {model: 'Camaro', price: 'expensive'}
];

let prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);
