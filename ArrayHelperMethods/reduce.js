/* ECMAScript 2016 (ES6) - Example 1 */
const numbers = [10, 20, 30];

const total = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);

console.log(total);

/* ECMAScript 2016 (ES6) - Example 2 */
const primaryColors = [
    {color: 'Red'},
    {color: 'Yellow'},
    {color: 'Blue'}
];

const colors = primaryColors.reduce(function (previous, primaryColor) {
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

const balanced = balancedParens('((()))');
const unBalanced = balancedParens('((()())');

console.log(balanced);
console.log(unBalanced);
