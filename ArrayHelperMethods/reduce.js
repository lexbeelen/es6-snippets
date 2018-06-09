/* ECMAScript 2016 (ES6) - Example 1 */
let numbers = [10, 20, 30];

let total = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);

console.log(total);

/* ECMAScript 2016 (ES6) - Example 2 */
let primaryColors = [
    {color: 'Red'},
    {color: 'Yellow'},
    {color: 'Blue'}
];

let colors = primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(colors);

/* ECMAScript 2016 (ES6) - Example 3 */
function balancedParens(string) {
    return !string.split("").reduce(function (previous, char) {
        if (previous < 0) {
            return previous
        }
        if (char === "(") {
            return ++previous
        }
        if (char === ")") {
            return --previous
        }
        return previous;
    }, 0);
}

let balanced = balancedParens('((()))');
let unBalanced = balancedParens('((()())');

console.log(balanced);
console.log(unBalanced);
