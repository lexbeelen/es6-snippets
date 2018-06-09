/* ECMAScript 2016 (ES6) - Example 1 */
const computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];

const onlySomeComputersCanRunProgram = computers.some(function (computer) {
    return computer.ram > 16;
});

console.log(onlySomeComputersCanRunProgram);

/* ECMAScript 2016 (ES6) - Example 2 */
const names = [
    "Lex",
    "Lauren",
    "Boaz"
];

const someNamesGreaterThanThree = names.some(function (name) {
    return name.length > 3;
});

console.log(someNamesGreaterThanThree);
