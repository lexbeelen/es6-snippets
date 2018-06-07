/* ECMAScript 2016 (ES6) - Example 1 */
let computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];

let allComputersCanRunProgram = computers.every(function (computer) {
    return computer.ram > 16;
});

console.log(allComputersCanRunProgram);

/* ECMAScript 2016 (ES6) - Example 1 */
let names = [
    "Lex",
    "Lauren",
    "Boaz"
];

let allNamesGreaterThanTwo = names.every(function (name) {
    return name.length > 2;
});

console.log(allNamesGreaterThanTwo);
